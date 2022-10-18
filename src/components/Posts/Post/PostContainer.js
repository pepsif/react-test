import styles from "./Post.module.css"
import photo from "../../../Images/15.jpg"
import React from "react"
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/store";
import Post from "./Post";


const PostContainer = (props) => {

    // const postsElements = props.state.map(item => {
    //     // debugger
    //     return (
    //         <div className={styles.post_section}>
    //             <img className={styles.post_photo} src={photo} alt="user photo"></img>
    //             <div className={styles.user_block}>
    //                 <h3 className={styles.post_text}>{item.name}</h3>
    //                 <p className={styles.post_text}>{item.message}</p>
    //                 <span className={styles.like}>like {item.like}</span>
    //             </div>
    //         </div>
    //     )
    // })

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

