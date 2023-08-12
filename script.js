document.addEventListener("DOMContentLoaded",function(){
    console.log("Ready");


function createPosts(posts){
    console.log("post",posts);
   let output = ``;


    posts.forEach((post)=> {
        output +=`<li>${post.title}${post.id}</li>`;

    });
    document.getElementById("list").innerHTML = output;
}



    function getPosts(){
        fetch("./posts.json")

        .then((response)=>{
            return response.json();
        })
        .then((posts)=>{
            

            posts.fPorEach((post) => {
                createPosts(posts);
                // console.log("posts",posts);
            });


        })
        .catch((error)=>{
            console.error("error",error);
        });
    }
    getPosts();
});
