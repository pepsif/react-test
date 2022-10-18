import styles from "./Post.module.css"
import photo from "../../../Images/15.jpg"
import React from "react"
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/store";
import Post from "./Post";


const PostContainer = (props) => {


    const addPost = (text) => {
        // const text = newPostElement.current.value;
        props.dispatch(addPostActionCreator(text));

    }
    const onPostChange = (text) => {
        // const text = newPostElement.current.value;
        props.dispatch(updatePostTextActionCreator(text))
    }
    return (
        <Post initialPostText={props.postPage.newPostText} onPostChange={ onPostChange } addPost={ addPost } postsArr={props.postPage.posts} />

    )
}
export default PostContainer

