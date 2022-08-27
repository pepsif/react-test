import Post from "./Post/Post";
import styles from './Posts.module.css';

const Posts = ( props ) => {
// debugger
    return (
      <div className={styles.post_section}>
          <Post state={props.state.posts} dispatch={props.dispatch} newPostText={props.state.newPostText} />
      </div>
 )
}

export default Posts