import Post from "./Post/Post";
import styles from './Posts.module.css';
import PostContainer from "./Post/PostContainer";

const Posts = ( props ) => {
// debugger
    return (
        // props   state={props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText}
           // postPage={props.postPage} dispatch={props.dispatch}
      <div className={styles.post_section}>
          <PostContainer />
      </div>
 )
}

export default Posts