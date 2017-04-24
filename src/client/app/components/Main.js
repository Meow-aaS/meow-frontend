import React from 'react';
import ReactDOM from 'react-dom';


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
    <a className="item">
      <i className="mail icon"></i> Messages
    </a>
    <div className="ui simple dropdown item">
      More
      <i className="dropdown icon"></i>
      <div className="menu">
        <a className="item"><i className="edit icon"></i> Edit Profile</a>
        <a className="item"><i className="globe icon"></i> Choose Language</a>
        <a className="item"><i className="settings icon"></i> Account Settings</a>
      </div>
    </div>
    <div className="right item">
      <div className="ui input"><input type="text" placeholder="Search..."></input></div>
    </div>
  </div>
</div>
</div>
    );
  }
}

export default Main;
