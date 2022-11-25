import React from "react";
import styles from "./Users.module.css"

const Users = (props) => {
    const UsersElements = props.users.map(el => {
        return (
            <div className={styles.user_block} key={el.id}>
                <div className={styles.follow_block}>
                    <img className={styles.follow_image} src={require("../../icons/avatar-icon.jpg")}></img>
                    {(el.follow === true) ? <button className={styles.follow_button}>Unfollow</button>
                        : <button className={styles.follow_button}>Follow</button>}

                </div>
                <div className={styles.user_info_block}>
                    <span className={styles.user_name}>{el.name}</span>
                    <span className={styles.user_message}>{el.message}</span>
                    <span className={styles.user_country}>{el.country}</span>
                    <span className={styles.user_city}>{el.city}</span>
                </div>
            </div>
        )


    })
    return (
        <div className={styles.users_section}>
            <h2 className={styles.users_title}>Users</h2>
            <div className={styles.users_block}>
                {UsersElements}
            </div>
        </div>
    )
}

export default Users