import Post from "./Post/Post";
import styles from './Posts.module.css';
import PostContainer from "./Post/PostContainer";

const Posts = ( props ) => {
// debugger
    return (
        // props   state={props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText}

      <div className={styles.post_section}>
          <PostContainer state={props.state} dispatch={props.dispatch} postsElements ={ props.state.posts} />
      </div>
 )
}

export default Posts