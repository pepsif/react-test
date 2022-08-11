import styles from "./Messages.module.css";
import smile from "../../../Images/smile.png";

const Messages = (props) => {
    const MessagesElements = props.messages.map(item => {
        return <div className={styles.messages_item}>
                 <img className={styles.message_image} src={smile} alt="smile"></img>
                 <h4 className={styles.name}>{item.name}</h4>
                 <p>{item.message}</p>
               </div>
    })
    return (
        <div className={styles.messages_block}>
            <h2>Messages</h2>
            <div className={styles.messages}>
                { MessagesElements }
            </div>
        </div>
    )
}

export default Messages