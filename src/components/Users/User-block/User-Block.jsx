import React from "react";
import styles from "../Users.module.css";

const UserBlock = () => {
    return(
        <div className={styles.user_block}>
            <div className={styles.follow_block}>
                <img className={styles.follow_image} src={require("../../../icons/avatar-icon.jpg")}></img>
                <button className={styles.follow_button}>Follow</button>
            </div>
            <div className={styles.user_info_block}>
                <span className={styles.user_name}>Stepan S</span>
                <span className={styles.user_message}>Hy!!! friends</span>
                <span className={styles.user_country}>Ukraine</span>
                <span className={styles.user_city}>Kiev</span>
            </div>
        </div>
    )
}

export default UserBlock