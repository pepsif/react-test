import styles from "./Profile..module.css";
import photo from "../../robo.jpg";

const Profile = (props) => {
    return (
        <div className={styles.card}>
            <img className={styles.card_photo} src={photo} alt="photo"/>
            <div className={styles.card_description}>
                <h3 className={`${styles.card_item} ${styles.card_name}`}>Dmitry K</h3>
                <p className={styles.card_item}>Date of Birth: 2 january</p>
                <p className={styles.card_item}>City: Lviv</p>
                <p className={styles.card_item}>Education: Red Monkey 2020</p>
                <p className={styles.card_item}>Web Site: https://red-monkey.ua</p>
            </div>
        </div>
    )
}

export default Profile