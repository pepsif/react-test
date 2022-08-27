import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = ( props ) => {
    // debugger
    return (
        <div className={styles.dialogs}>

            <Dialog dialogData={props.state.DialogData}/>
            <Messages messages={props.state.MessagesData}/>
        </div>
    )
}

export default Dialogs