import Post from "./Post/Post";
import styles from './Posts.module.css';
import PostContainer from "./Post/PostContainer";

const Posts = ( props ) => {
// debugger
    return (
       
      <div className={styles.post_section}>
          <PostContainer />
      </div>
 )
}

export default Posts