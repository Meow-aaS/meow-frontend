import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.js';
class CommentList extends React.Component {
  render() {
    let cache = this.props.comment;
    let rows = [];
    for (let i = 0 ; i < cache.length ; i++){
      rows.push(<Comment comment = {cache[i]} />);
    }
    return (
      <div>
        {rows}
      </div>
    );
  }
}

export default CommentList;
