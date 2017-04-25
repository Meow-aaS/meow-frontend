import React from 'react';
import ReactDOM from 'react-dom';

class Comment extends React.Component {
  render() {
    return (
      <div>
        {this.props.comment}
      </div>
    );
  }
}

export default Comment;
