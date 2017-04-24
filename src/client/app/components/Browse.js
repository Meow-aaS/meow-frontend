import React from 'react';
import ReactDOM from 'react-dom';

class Browse extends React.Component{
    render(){
        return(
          <div className="ui form">
             <div className="field">
                 <label>Name</label>
                 <input type="text"/>
             </div>
               <div className="field">
                 <label>Caption</label>
                 <textarea rows="2"></textarea>
               </div>    
               <div className="field">
                   <button className="ui basic button">
                        <i className="file image outline icon"></i>
                        Photo
                   </button>
                   <button className="ui primary button">
                     Post
                   </button>
               </div>
          </div>
          

        );
    }
}

export default Browse;