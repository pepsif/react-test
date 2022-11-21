import styles from './Dialogs.module.css';
import MessagesContainer from "./Messages/MessagesContainer";
import DialogContainer from "./Dialog/DialogContainer";

const Dialogs = () => {
    // debugger
    return (
        <div className={styles.dialogs}>
            <DialogContainer/>
            <MessagesContainer/>
        </div>
    )
}

export default Dialogs