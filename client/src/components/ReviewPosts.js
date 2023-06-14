import { useEffect, useState } from "react"
import RenderReviewEditPost from "./RenderReviewEditPost"

function ReviewPosts(){
    const [posts, setPosts] = useState(null)
    const [postPhoto, setPostPhoto] = useState(null)

    useEffect(() => {
        fetch('/review_posts')
        .then((r) => {
            if(r.ok){
                r.json().then((data) => {
                    console.log(data)
                    setPosts(data)
                })
            }
        })
    },[])

    if(posts === null){
        return(<h1>Loading ...</h1>)
    }

    const postList = posts.map((post) => {
        return <RenderReviewEditPost key={post.id} post={post} removePost={removePost}/>
    })

    function removePost(id){
        const filteredPost= posts.filter((post) => {
            return post.id !== id
        })
        setPosts(filteredPost)
    }

    function handleNewPost(e){
        e.preventDefault()
        if(posts.length > 10){
            alert('You have a max of 10 reviews, please delete one.')
        }else{
            const formData = new FormData()
                formData.append("photo", postPhoto)
                formData.append("name", e.target.name.value)
                formData.append("description", e.target.description.value)

            fetch('/review_posts', {
                method: "POST",
                body: formData
            })
            .then((r) => {
                if(r.ok){
                    r.json().then((data) => {
                        console.log(data)
                        setPosts([...posts, data])
                        alert('new post added')
                        e.target.reset()
                    })
                }
            })
        }
    
    }



    return(
        <div>
            <div>
                <h2>Add New Post</h2>
                <form onSubmit={handleNewPost}>
                    <label>Image: </label>
                    <input type="file" onChange={(e) => setPostPhoto(e.target.files[0])} accept="photo/*" placeholder="Photo" className="file-input file-input-bordered w-full max-w-xs" name="photo"/><br></br>
                    <label>Name: </label>
                    <input type="text" name="name" /><br></br>
                    <label>Review: </label>
                    <input type="text" name="description" /><br></br>
                    <button>ADD</button>
                </form>
            </div>
            <div>
                {postList}
            </div>
        </div>
    )
}

export default ReviewPosts