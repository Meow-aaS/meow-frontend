import React from 'react';
import ReactDOM from 'react-dom';

class ProgressBar extends React.Component {
  render() {
    return (
      <div>
        <div className="ui segment">
            <div className="ui active loader"></div>
  
        </div>
      </div>
    );
  }
}

export default ProgressBar;
