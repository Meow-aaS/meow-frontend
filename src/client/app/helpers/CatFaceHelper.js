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

            }).catch(function (error) {
                return error;

            });

    },

    getNextFeeds: function (pagination) {
        console.log("http://130.211.244.16:3000/post/list?page=" + pagination);
        return axios.get("http://130.211.244.16:3000/post/list?page=" + pagination)
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

       return axios.post('http://130.211.244.16:3000/post/', dataPost)
            .then(function (response) {
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            });



    }




}

export default CatFaceHelper;