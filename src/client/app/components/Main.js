import React from 'react';
import ReactDOM from 'react-dom';
import Browse from './Browse.js';

class Main extends React.Component {
  render() {
    return (
      <div>
      <div className="ui attached stackable menu">
  <div className="ui container">
    <a className="item">
      <i className="home icon"></i> Home
    </a>
    <a className="item">
      <i className="grid layout icon"></i> Browse
    </a>



  </div>
</div>

</div>
    );
  }
}

export default Main;
