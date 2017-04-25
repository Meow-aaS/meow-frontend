import React from 'react';
import ReactDOM from 'react-dom';

class Image extends React.Component {

constructor(props){
    super(props);
    
    this.state = {
        isDraw : false

    }

}
 componentDidMount(){
     var detected = {
        x : 0,
        y : 0,
        height : 100,
        width : 200

     };

    this.drawReact(detected);
 }
 drawReact(detected){
    var x = detected.x,
    y = detected.y,
    height = detected.height,
    width = detected.width;
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.stokeStyle = "#ff0000";
    ctx.strokeRect(x,y,width,height);

    this.setState({
        isDraw : true
    });


 }
  render() {
    return (
       <div className="image">
            <img id = "choose_image" src={"http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg"}></img>
            {/*<canvas id="myCanvas" style={{ position : "absolute",top:"0",left:"0" ,width:"100%",height:"100%"}}></canvas>*/}
        </div>
    );
  }
}

export default Image;
