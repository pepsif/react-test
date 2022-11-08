import React from "react";
import styles from "./Messages.module.css";
import smile from "../../../Images/smile.png";

const Messages = ( props ) => {
    // debugger
    const messageElement = React.createRef();
    const addMessageButton = React.createRef();
    
    const MessagesElements = props.messagesArray.map(item => {
        return <div className={styles.messages_item}>
                 <img className={styles.message_image} src={smile} alt="smile"></img>
                 <h4 className={styles.name}>{item.name}</h4>
                 <p>{item.message}</p>
               </div>
    })
    const messagesPostChange = () => {
        const text = messageElement.current.value;
        props.messagesPostChange(text)
    }
    const sendMessage = () => {
        const text = messageElement.current.value;
        props.sendMessage(text)
    }

    return (
     // <textarea  
    // <button className={styles.send_button}  >SEND MESSAGE</button>

        <div className={styles.messages_block}>
            <h2>Messages</h2>
            <div className={styles.messages}>
                { MessagesElements }
            </div>
            <div className={styles.send_message_block}>
              <textarea className={styles.textarea}  value={ props.messagesText} ref={ messageElement } onChange={ messagesPostChange }  ></textarea>
              <button className={styles.send_button} ref={ addMessageButton } onClick={ sendMessage }>SEND MESSAGE</button>
            </div>
        </div>
    )
}

export default Messages