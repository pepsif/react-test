import styles from "./Post.module.css"
import photo from "../../../Images/15.jpg"
import React from "react"
// import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/store";


const Post = (props) => {
    // debugger
    const newPostElement = React.createRef();
    const addPostButton = React.createRef();

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

    const addPost = () => {
        const text = newPostElement.current.value;
        props.addPost( text )

    }
    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.onPostChange( text )
    }
    return (


        <div>
            <div className={styles.button_block}>
                <textarea className={styles.textArea} ref={newPostElement} value={props.initialPostText}
                          onChange={ onPostChange }  ></textarea>
                <button className={styles.addButton} ref={addPostButton} onClick={addPost}>Add post</button>
            </div>
            {/*{postsElements}*/}
        </div>
    )
}

export default Post

