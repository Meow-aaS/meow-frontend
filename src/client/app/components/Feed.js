import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post.js';

class Feed extends React.Component {
  render() {
    return (
      <div className = "ui center aligned grid">
        <div>
        <Post/>
        </div>
        <div>
        <Post/>
        </div>
      </div>



    );
  }
}

export default Feed;
