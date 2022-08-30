import React from "react";
import styles from "./Messages.module.css";
import smile from "../../../Images/smile.png";

const Messages = ( props ) => {
    const messageElement = React.createRef();
    const addMessageButton = React.createRef();

    const MessagesElements = props.messages.map(item => {
        return <div className={styles.messages_item}>
                 <img className={styles.message_image} src={smile} alt="smile"></img>
                 <h4 className={styles.name}>{item.name}</h4>
                 <p>{item.message}</p>
               </div>
    })
    const messagesPostChange = () => {
        const text = messageElement.current.value;
        props.dispatch( {type: 'UPDATE-MESSAGE-TEXT', newText: text } )
    }
    const sendMessage = () => {
        const text = messageElement.current.value;
        props.dispatch( {type: 'ADD-NEW-MESSAGE', newText: text } )
    }

    return (
        <div className={styles.messages_block}>
            <h2>Messages</h2>
            <div className={styles.messages}>
                { MessagesElements }
            </div>
            <div className={styles.send_message_block}>
              <textarea className={styles.textarea} onChange={ messagesPostChange } value={ props.messagesText} ref={ messageElement }></textarea>
              <button className={styles.send_button} ref={ addMessageButton } onClick={ sendMessage }>SEND MESSAGE</button>
            </div>
        </div>
    )
}

export default Messages