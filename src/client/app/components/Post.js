import React from 'react';
import ReactDOM from 'react-dom';
// import styles from '../assets/css/post.css'
import '../assets/css/post.css';
import Like from './Like.js';
import Image from './Image.js'
import CommentList from './CommentList.js';
import classname from 'classnames';

class Post extends React.Component {
  constructor(props){
    super(props)


  }

  timeSince(timeStamp) {
    var now = new Date(),
      secondsPast = (now.getTime() - timeStamp) / 1000;
    if(secondsPast < 60){
      return parseInt(secondsPast) + 's';
    }
    if(secondsPast < 3600){
      return parseInt(secondsPast/60) + 'm';
    }
    if(secondsPast <= 86400){
      return parseInt(secondsPast/3600) + 'h';
    }
    if(secondsPast > 86400){
        day = timeStamp.getDate();
        month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ","");
        year = timeStamp.getFullYear() == now.getFullYear() ? "" :  " "+timeStamp.getFullYear();
        return day + " " + month + year;
    }
  }

  render() {

    return (

      // {classname('ui', 'card', 'centered', styles['ui.card.centered'])}
    <div style = {{marginTop : "25px"}}>
      <div className="ui card centered">
        <div className="content">
          <div className="right floated meta">{this.timeSince(this.props.time)}</div>
           <img className="ui avatar image" src={"src/client/app/assets/images/elliot.jpg"}></img> {this.props.ownername}
        </div>
        <Image imageUrl = {this.props.imageUrl}/>
        <div className="content">
          <Like like = {this.props.like} />
          <i className="comment icon"></i>
          {this.props.comment.length} comments
          <div><b>{this.props.caption}</b></div>

          <CommentList comment = {this.props.comment} />

       </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="heart outline icon"></i>
            <input type="text" placeholder="Add Comment..."></input>

          </div>
        </div>

      </div>
      </div>


    );
  }
}

export default Post;
