import React from "react";
import styles from "./Messages.module.css";
import smile from "../../../Images/smile.png";
import Messages from "./Messages";
import StoreContext from "../../../StoreContext";

const MessagesContainer = () => {
    // debugger


    // <Messages  
    //                     sendMessage={sendMessage} messages={store.getState().MessagesData} />
    return <StoreContext.Consumer>
        {reduxStore => {
            const messagesPostChange = (text) => {
                // const text = messageElement.current.value;
                reduxStore.dispatch({ type: 'UPDATE-MESSAGE-TEXT', newText: text })
            }
            let sendMessage = (text) => {
                // const text = messageElement.current.value;
                reduxStore.dispatch({ type: 'ADD-NEW-MESSAGE', newText: text })
            }
            return <Messages messagesText={reduxStore.getState().dialogsPage.messagesPageTextAreaText}
                messagesArray={reduxStore.getState().dialogsPage.MessagesData}
                sendMessage={sendMessage}
                messagesPostChange={ messagesPostChange }
            />
        }
        }
    </StoreContext.Consumer>

}

export default MessagesContainer;