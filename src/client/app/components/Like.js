import React from 'react';
import ReactDOM from 'react-dom';
import classname from 'classnames';
import '../assets/css/like.css';
class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLike : false,
      likes : this.props.like
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event){
    if(this.state.isLike == true){
      this.setState({
        isLike : false,
        likes : this.state.likes - 1
      });
    }
    if(this.state.isLike == false){
      this.setState({
        isLike : true,
        likes : this.state.likes + 1
      });
    }

  }
  render() {
    console.log(this.state.isLike);
    let classes = classname({'heart floated like icon':this.state.isLike,'heart outline like icon': !this.state.isLike});
    console.log(classes);
    return (
      <div>
        <span className="right floated">
          <i onClick = {this.onClick} className={classes}></i>
          {this.state.likes} likes
        </span>
      </div>

      );

  }
}

export default Like;
