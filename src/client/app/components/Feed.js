import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post.js';
import ProgressBar from './ProgressBar.js';

class Feed extends React.Component {
  constructor(props){
    super(props); 
     this.state = {
       post :[<Post like =  {2} comment = {['the weeknd','bruno mars','damn']}/>,
              <Post like =  {2} comment = {['the weeknd','bruno mars','damn']}/>,
              <Post like =  {2} comment = {['the weeknd','bruno mars','damn']}/>],
       isBottom : false,
       isProgressBar : false,
     
    };
    this.handleScroll = this.handleScroll.bind(this);


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
    return (
      <div>
          {this.state.post}
      </div>


    );
  }
}

export default Feed;
