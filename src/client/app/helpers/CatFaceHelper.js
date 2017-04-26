import axios from 'axios';

// function getFeeds(){
//     return axios.get("")
//     .then(function (feed){
//         return feed.data;

//     });


// }

var CatFaceHelper = {

    getFeeds: function () {
        return axios.get("http://api.2meows.ml/post/list")
            .then(function (response) {
                return response.data;

            }).catch(function (error) {
                return error;

            });

    },

    getNextFeeds: function (pagination) {
        console.log("http://api.2meows.ml/post/list?page=" + pagination);
        return axios.get("http://api.2meows.ml/post/list?page=" + pagination)
            .then(function (response) {
                return response.data;

            }).catch(function (error) {
                return error;


            });


    },
    postImage: function (post) {
       const dataPost = new FormData();
       console.log(post);
       dataPost.append("owner_name",post.owner_name);
       dataPost.append("caption",post.caption);
       dataPost.append("image", post.file);

       return axios.post('http://api.2meows.ml/post/', dataPost)
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            });



    },

    postComment:function(commentText,id){
        console.log(commentText);
        return axios.post('http://api.2meows.ml/post/comment?id='+id,{
            text : commentText

        }).then(function(response){
            return response.data

        }).catch(function(error){


        });


    },


    likePost : function(id){
        return axios.put('',{


        }).then(function(response){



        }).catch(function(error){


        });



    }




}

export default CatFaceHelper;