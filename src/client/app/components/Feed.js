import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post.js';

class Feed extends React.Component {
  render() {
    return (
      <div>
         <Post like =  {2}
                comment = {['the weeknd','bruno mars','damn']}/>
          <Post like =  {2}
                comment = {['the weeknd','bruno mars','damn']}/>
          <Post like =  {2}
                comment = {['the weeknd','bruno mars','damns']}/>
      </div>


    );
  }
}

export default Feed;
