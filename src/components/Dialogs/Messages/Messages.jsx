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
    const messagesPostChange = () => {
        console.log('messages text change')
    }


    return (
        <div className={styles.messages_block}>
            <h2>Messages</h2>
            <div className={styles.messages}>
                { MessagesElements }
            </div>
            <div className={styles.send_message_block}>
              <textarea className={styles.textarea} onChange={ messagesPostChange }></textarea>
              <button className={styles.send_button}>SEND MESSAGE</button>
            </div>
        </div>
    )
}

export default Messages