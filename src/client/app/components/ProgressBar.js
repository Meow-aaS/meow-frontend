import React from 'react';
import ReactDOM from 'react-dom';

class ProgressBar extends React.Component {
  render() {
    return (
      <div style={{marginTop : "25px",marginBottom : "25px"}}>
        <div className="ui active centered inline loader"></div>
      </div>
    );
  }
}

export default ProgressBar;
