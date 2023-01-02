import styles from "./Profile..module.css";
import preloader from "../../icons/preloader.gif"

const Profile = (props) => {


    if(!props.profile) {
        return <div>
            <h2>Downloading...</h2>
            {preloader}
        </div>

    }
    // debugger
    // console.log(props)
    return (
        <div className={styles.card}>
            <img className={styles.card_photo} src={props.profile.photos.large} alt="photo"/>
            <div className={styles.card_description}>
                <h3 className={`${styles.card_item} ${styles.card_name}`}>{props.profile.aboutMe}</h3>
                <p className={styles.card_item}>Date of Birth: 2 january</p>
                <p className={styles.card_item}>City: Lviv</p>
                <p className={styles.card_item}>Education: Red Monkey 2020</p>
                <h3>Contacts</h3>
                <p className={styles.card_item}>{props.profile.contacts.website}</p>
            </div>
        </div>
    )
}

export default Profile