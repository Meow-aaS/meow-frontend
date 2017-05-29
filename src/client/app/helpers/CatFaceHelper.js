import axios from 'axios';

var postList = [
    {
        owner_name: "Saint",
        image_url: "src/client/app/assets/images/1.png",
        caption: "This is my cat.",
        postID: 0,
        liked_count: 6,
        comments: ["So cute na.", "Woooo!!"],
        createdAt: Date.now()
    },
    {
        owner_name: "Best",
        image_url: "src/client/app/assets/images/2.png",
        caption: "She is so cuted.",
        postID: 1,
        liked_count: 4,
        comments: ["<3"],
        createdAt: Date.now()
    },
    {
        owner_name: "Jeng",
        image_url: "src/client/app/assets/images/3.png",
        caption: "lolz xxx",
        postID: 2,
        liked_count: 16,
        comments: ["I luv you"],
        createdAt: Date.now()
    },
    {
        owner_name: "Kim",
        image_url: "src/client/app/assets/images/4.png",
        caption: "Love me Love My Cats.",
        postID: 3,
        liked_count: 8,
        comments: ["So good", "<3"],
        createdAt: Date.now()
    },
    {
        owner_name: "John",
        image_url: "src/client/app/assets/images/5.png",
        caption: "The fluffly cat.",
        postID: 4,
        liked_count: 11,
        comments: [],
        createdAt: Date.now()
    },
    {
        owner_name: "Elizabeth",
        image_url: "src/client/app/assets/images/6.png",
        caption: "uvuvuevuevue onyatevuevue unyuttu osas.",
        postID: 5,
        liked_count: 20,
        comments: [],
        createdAt: Date.now()
    },
]
// function getFeeds(){
//     return axios.get("")
//     .then(function (feed){
//         return feed.data;

//     });


// }

var CatFaceHelper = {
    getMockFeeds: function() {
        return postList;
    },
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
    postMockImage: function() {
        postList.unshift({
            owner_name: "User",
            image_url: "src/client/app/assets/images/7.png",
            caption: "It is what it is.",
            postID: 6,
            liked_count: 0,
            comments: [],
            createdAt: Date.now()
        })
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