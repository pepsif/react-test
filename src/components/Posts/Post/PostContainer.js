import React from "react"
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/store";
import Post from "./Post";
import {connect} from "react-redux";

let mapsStateToProps = ( state ) => {
    return {
        initialPostText: state.postsPage.newPostText,
        postsArr: state.postsPage.posts
    }
}
let mapsDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(updatePostTextActionCreator(text))
        },
        addPost: (text) => {
            dispatch(addPostActionCreator(text));
        }
    }
}
const PostContainer = connect( mapsStateToProps, mapsDispatchToProps )(Post)

export default PostContainer

