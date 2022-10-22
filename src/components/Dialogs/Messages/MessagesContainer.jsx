import React from "react";
import styles from "./Messages.module.css";
import smile from "../../../Images/smile.png";
import Messages from "./Messages";

const MessagesContainer = ( props ) => {
    // debugger
      const messagesPostChange = (text) => {
        // const text = messageElement.current.value;
        props.dispatch( {type: 'UPDATE-MESSAGE-TEXT', newText: text } )
    }
    const sendMessage = (text) => {
        // const text = messageElement.current.value;
        props.dispatch( {type: 'ADD-NEW-MESSAGE', newText: text } )
    }

    return (
      <Messages messagesText={props.messagesText}  messagesPostChange={ messagesPostChange }
                sendMessage={sendMessage} messages={props.messages} />
    )
}

export default MessagesContainer