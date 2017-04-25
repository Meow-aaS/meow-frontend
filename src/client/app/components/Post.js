import React from 'react';
import ReactDOM from 'react-dom';



class Post extends React.Component {
  render() {
    return (
      
      <div className="ui centered card" style={{width : '640 px ! important'}}>
        <div className="content">
          <div className="right floated meta">14h</div>
           <img className="ui avatar image" src={"src/client/app/assets/images/elliot.jpg"}></img> Elliot
        </div>
        <div className="image">
            <img src={"src/client/app/assets/images/image.png"}></img>

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
            <input type="text" placeholder="Add Comment..."></input>
          </div>
        </div>
      </div>
  

    );
  }
}

export default Post;
