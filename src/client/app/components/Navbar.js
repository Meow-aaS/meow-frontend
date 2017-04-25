import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post.js';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <div>
      <div className="ui attached stackable menu">
  <div className="ui container">
    <Link to="/"><a className="item">
      <i className="home icon"></i> Home
    </a></Link>
   <Link to="/browse"> <a className="item">
      <i className="grid layout icon"></i> Browse
    </a>
    </Link>
   
  </div>
</div>

</div>
    );
  }
}

export default Navbar;
