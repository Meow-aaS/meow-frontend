import React from 'react';
import ReactDOM from 'react-dom';
import "../assets/css/browse.css";
import CatFaceHelper from '../helpers/CatFaceHelper.js';
class Browse extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            name : null,
            caption : null,
            file : null,

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextArea = this.handleTextArea.bind(this);
        this.handleFile = this.handleFile.bind(this);

    }

   handleChange(event) {
      this.setState({
          name: event.target.value,
          
    });



    console.log(this.state);
  }

  handleTextArea(event){
    this.setState({
        caption : event.target.value,

    });

  }

  

   handleFile(e) {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = (upload) => {
      this.setState({
        file : file,
    
      });
    };

    reader.readAsDataURL(file);
  }

  handleSubmit(e) {
      e.preventDefault()
        // var post = {
        //     owner_name : this.state.name,
        //     caption : this.state.caption,
        //     file : this.state.file
        // }   
        CatFaceHelper.postMockImage()


         //console.log(this.post);



  }
    render(){
        return(
     <div>
    
        <div className= "ui middle aligned center aligned grid">
            <div id = "container-450"className="column">
            <div className="ui form">
             <div className="field">
                 <label>Name</label>
                 <input name = "name" id="name"type="text" onChange={this.handleChange}/>
             </div>
               <div className="field">
                 <label>Caption</label>
                 <textarea name = "caption" rows="2" id="name" onChange={this.handleTextArea}></textarea>
               </div>    
               <div className="field">
                   
                   <label className="ui basic button">
                       <input name = "image" id="file-upload" type="file" style={{display : "none"}} accept="image/*" onChange={this.handleFile}/>
                        <i className="file image outline icon"></i>
                        Photo
                   </label>
                   < button className="ui primary button" onClick = {this.handleSubmit} >
    
                        post
                    </button>
                  
               </div>
          </div> 
          </div>
        </div>   
    
    </div>  

        );
    }
}

export default Browse;