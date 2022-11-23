import React from "react";
import styles from "./Users.module.css"
import UserBlock from "./User-block/User-Block";

const Users = () => {
    return (
        <div className={styles.users_section}>
            <h2 className={styles.users_title}>Users</h2>
            <div className={styles.users_block}>
                <UserBlock />
                <UserBlock />
                <UserBlock />


            </div>
        </div>
    )
}

export default Users