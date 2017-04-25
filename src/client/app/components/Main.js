import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.js';
import Feed from './Feed.js';
import Post from './Post.js';
import { Router, Route ,Switch} from 'react-router'
import { HashRouter,IndexRoute} from 'react-router-dom'
import Browse from './Browse.js';

class Main extends React.Component {
  render() {
    return (
      <div>
      
        <Navbar/>
        <Route exact path = '/' component = {Feed} />

      </div>


    );
  }
}

export default Main;
