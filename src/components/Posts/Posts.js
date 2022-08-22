import Post from "./Post/Post";
import styles from './Posts.module.css';

const Posts = ( props ) => {
// debugger
    return (
      <div className={styles.post_section}>
          <Post state={props.state.postsPage.posts} newPostText={ props.state.postsPage.newPostText} addPost={props.addPost}
           updatePostText={props.updatePostText}/>
      </div>
 )
}

export default Posts