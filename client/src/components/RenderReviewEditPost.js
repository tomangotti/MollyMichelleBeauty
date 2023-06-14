
function RenderReviewEditPost({post, removePost}){

    function handleDelete(){
        fetch(`/review_posts/${post.id}`, {
            method: "DELETE",
        })
        .then((r) => {
            if(r.ok){
                removePost(post.id)
            }
        })
    }


    return(<div>
        <h4>{post.name}</h4>
        <p>{post.description}</p>
        <img src={post.photo} />
        <button onClick={handleDelete}>Delete</button>
        </div>)
}

export default RenderReviewEditPost