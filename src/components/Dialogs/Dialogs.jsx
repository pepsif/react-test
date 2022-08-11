import styles from './Dialogs.module.css';

import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = ( props ) => {
    return (
        <div className={styles.dialogs}>
            <Dialog dialogData={props.state.dialogsPage.DialogData}/>
            <Messages messages={props.state.dialogsPage.MessagesData}/>
        </div>
    )
}

export default Dialogs