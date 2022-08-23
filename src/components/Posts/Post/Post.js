import styles from "./Post.module.css"
import photo from "../../../Images/15.jpg"
import React from "react"

const Post = (props) => {
    // debugger
    const newPostElement = React.createRef();
    const addPostButton = React.createRef();

    let postsElements = props.state.map(item => {
        // debugger
        return (
            <div className={styles.post_section}>
                <img className={styles.post_photo} src={photo} alt="user photo"></img>
                <div className={styles.user_block}>
                    <h3 className={styles.post_text}>{item.name}</h3>
                    <p className={styles.post_text}>{item.message}</p>
                    <span className={styles.like}>like {item.like}</span>
                </div>
            </div>
        )
    })

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch( { type: 'ADD-POST', newText: text} );

    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch( {type: 'UPDATE-NEW-POST-TEXT', newText: text })
    }
    return (
        <div>
            <div className={styles.button_block}>
                <textarea className={styles.textArea} ref={newPostElement} onChange={onPostChange}
                          value={props.newPostText}></textarea>
                <button className={styles.addButton} ref={addPostButton} onClick={addPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default Post

