import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="right floated meta">14h</div>
        </div>
        <div className="image">

        </div>
        <div className="content">
          <span className="right floated">
            <i className="heart outline like icon"></i>
            17 likes
           </span>
          <i className="comment icon"></i>
          3 comments
       </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="heart outline icon"></i>

          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));