import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post.js';
import ProgressBar from './ProgressBar.js';
import CatFaceHelper from '../helpers/CatFaceHelper.js';

class Feed extends React.Component {
  constructor(props){
    super(props);
     this.state = {
       post :[<Post key = "1" like =  {2} comment = {['the weeknd','bruno mars','damn','test','test','test','test']}/>,
              <Post key = "2" like =  {2} comment = {['the weeknd','bruno mars','damn']}/>,
              <Post key = "3" like =  {2} comment = {['the weeknd','bruno mars','damn']}/>],
       isBottom : false,
       isProgressBar : false,
       isFirstGet : false,
       postObject : null,
       postData : [],
     
    };
    this.handleScroll = this.handleScroll.bind(this);


  }
  componentWillMount(){

    CatFaceHelper.getFeeds()
                 .then(function(response){
                    this.setState({
                        postObject : response,
                        postData : response.data 

                    });

                    

                 }.bind(this));
    

  }
  componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      console.log("bottom" + this.state.post.length);
        let cache = this.state.post;
        var delayMillis = 1000; //1 second

        this.setState({
          isBottom : true,
          post : cache
         
        });
        if(this.state.isBottom && !this.state.isProgressBar){
           cache.push(<ProgressBar/>);
           this.setState({
              isProgressBar : true
           });
        }
       setTimeout(function() {
  //your code to be executed after 1 second
          console.log(cache)

          cache.pop();
          cache.push(<Post like =  {5}
                comment = {['the weeknd','bruno mars','damn']}/> );

                this.setState({
                    post : cache,
                    isProgressBar: false

                 });
        }.bind(this), delayMillis);

     } else {
      console.log("not bottom");

    }
  }
  
  render() {
    console.log(this.state.postData);
    return (
      <div> 
          {this.state.postData.map(data =>(
              <Post key = {data.postID} like = {data.liked_count} comment = {data.comments} ownername = {data.owner_name} />
          ))}
      </div>


    );
  }
}

export default Feed;
