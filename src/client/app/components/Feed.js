import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post.js';

class Feed extends React.Component {
  render() {
    return (
      <div>
         <Post like =  {2}
                comment = {3}/>
          <Post like =  {2}
                comment = {3}/>
          <Post like =  {2}
                comment = {3}/>
      </div>


    );
  }
}

export default Feed;
