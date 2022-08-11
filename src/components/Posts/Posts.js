import Post from "./Post/Post";
import styles from './Posts.module.css';

const Posts = ( props ) => {
// debugger
    return (
      <div className={styles.post_section}>
          <Post state={props.state.postsPage.posts} addPost={props.addPost} newPostText={ props.state.postsPage.newPostText}
            updateNewPostText={props.updateNewPostText} />
      </div>
 )
}

export default Posts