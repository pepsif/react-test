import styles from "./Post.module.css"
import photo from "../../../Images/15.jpg"
import React from "react"
import { addPostActionCreator, updatePostTextActionCreator } from "../../../redux/store";
import Post from "./Post";
import StoreContext from "../../../StoreContext";


const PostContainer = () => {




    return (
        //  <Post  onPostChange={ onPostChange } addPost={ addPost } postsArr={props.postPage.posts} />
        <StoreContext.Consumer>
            {reduxStore => {
                const onPostChange = (text) => {
                    // const text = newPostElement.current.value;
                    reduxStore.dispatch(updatePostTextActionCreator(text))
                }
                const addPost = (text) => {
                    // const text = newPostElement.current.value;
                    reduxStore.dispatch(addPostActionCreator(text));

                }
                return <Post initialPostText={reduxStore.getState().postsPage.newPostText}
                    postsArr={reduxStore.getState().postsPage.posts}
                    onPostChange={onPostChange}
                    addPost={addPost}
                />
            }
            }
        </StoreContext.Consumer>


    )
}
export default PostContainer

