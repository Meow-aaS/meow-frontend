import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post.js';

class Feed extends React.Component {
  render() {
    return (
      <div>
         <Post/>
         <Post/>
         <Post/>
      </div>


    );
  }
}

export default Feed;
