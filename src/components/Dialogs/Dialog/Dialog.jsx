import styles from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = ( props ) => {
    const path = "/dialogs/" + props.id;

    return (
        <div className={styles.item}>
            <NavLink className={styles.item_link} to={path}> {props.name} </NavLink>
        </div>
    )
}
// debugger
const Dialog = ( props ) => {
// debugger
    const DialogElements = props.dialogData.map( item => {
        return <DialogItem name={item.name} id={item.id} key={item.id}/>

    })
    return (
        <div className={styles.dialog_block}>
            <h2 className={styles.dialogs_title}>Dialogs</h2>
            <div className={styles.dialogs_items}>
                { DialogElements }

            </div>
        </div>

    )
}


export default Dialog