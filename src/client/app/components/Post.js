import React from 'react';
import ReactDOM from 'react-dom';
// import styles from '../assets/css/post.css'
import '../assets/css/post.css';
import Like from './Like.js';
import CommentList from './CommentList.js';
import classname from 'classnames';

class Post extends React.Component {

  render() {

    return (

      // {classname('ui', 'card', 'centered', styles['ui.card.centered'])}
      <div className="ui card centered">
        <div className="content">
          <div className="right floated meta">14h</div>
           <img className="ui avatar image" src={"src/client/app/assets/images/elliot.jpg"}></img> Elliot
        </div>
        <div className="image">
            <img src={"src/client/app/assets/images/image.png"}></img>

        </div>
        <div className="content">
          <Like like = {this.props.like} />
          <i className="comment icon"></i>
          {this.props.comment.length} comments
          <CommentList comment = {this.props.comment} />

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
