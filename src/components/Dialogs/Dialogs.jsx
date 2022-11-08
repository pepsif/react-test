import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = ( props ) => {
    // debugger
    return (
        <div className={styles.dialogs}>
            {/* <Dialog /> */}
            <MessagesContainer/>
        </div>
    )
}

export default Dialogs