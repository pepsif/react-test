import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = ( props ) => {
    // debugger
    return (
        <div className={styles.dialogs}>
            <Dialog dialogData={props.state.DialogData} />
            <MessagesContainer  messages={props.state.MessagesData} dispatch={props.dispatch} messagesText={ props.state.messagesPageTextAreaText} />
        </div>
    )
}

export default Dialogs