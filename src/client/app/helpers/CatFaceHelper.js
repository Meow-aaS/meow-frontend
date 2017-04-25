import axios from 'axios';

// function getFeeds(){
//     return axios.get("")
//     .then(function (feed){
//         return feed.data;

//     });


// }

var CatFaceHelper = {
    
    getFeeds: function () {
        return axios.get("http://130.211.244.16:3000/post/list")
            .then(function (response) {
                return response.data;

            }).catch(function(error){


            });

    },
    postImage: function(){


        
    }




}

export default CatFaceHelper;