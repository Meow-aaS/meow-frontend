import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.js';
class CommentList extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    comments:[],
    countIndex : 0,
    showLoadMore : false,
  };
  this.onClick = this.onClick.bind(this);
}

checkLoadMore(){
  let cache = this.props.comment;
  let rows = this.state.comments;
  let checkLoad = false;
  console.log("e "+(cache.length - this.state.comments.length));
  if(cache.length - this.state.comments.length <= 0){
    checkLoad = false;

  }else{
    checkLoad = true;


  }

  this.setState({
    showLoadMore : checkLoad
  });


}
  componentWillMount(){
    let cache = this.props.comment;
    let rows = [];
    let count = 0;

    if(cache.length >= 3){
      count = 3;
    }else{
      count = this.props.comment.length;
    }

    for (let i = 0 ; i < count ; i++){
      rows.push(<Comment comment = {cache[i]} />);
    }
    this.setState({
      comments: rows,
      countIndex : count
    });


    if(cache.length > 3){
      this.setState({
        showLoadMore : true
      });

    }else{
      this.setState({
        showLoadMore : false
      });


    }
  }
  render() {

    return (
      <div>
        {this.state.comments}
         {this.state.showLoadMore ? <a onClick = {this.onClick}>Load more</a> : null }
      </div>
    );
  }


  onClick(event) {

    let cache = this.props.comment;
    let rows = this.state.comments;
    let count = 0;
    if(cache.length - this.state.comments.length >= 3){
        count = 3;

    }else{
        count = cache.length - this.state.comments.length;
    }
    for (let i = 0 ; i < count  ; i++){
      rows.push(<Comment comment = {cache[this.state.countIndex+i]} />);
    }
    this.setState({
      countIndex : this.state.countIndex + count,
      comments: rows
    });

    this.checkLoadMore();


  }
}

export default CommentList;
