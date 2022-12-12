import React from "react";
import styles from "./Users.module.css"
import axios from "axios";

const Users = (props) => {
// debugger
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                    props.setUsers(response.data.items)
                    console.log(response)
                }
            )
        }
    }
// debugger
    const UsersElements = props.users.map(el => {
        // debugger
        return (
            <div className={styles.user_block} key={el.id}>
                <div className={styles.follow_block}>
                    <img className={styles.follow_image} src={require("../../icons/avatar-icon.jpg")}
                         alt="user foto"></img>
                    {(el.follow) ? <button className={styles.follow_button} onClick={() => {
                            props.unfollow(el.id)
                        }}>Unfollow</button>
                        : <button className={styles.follow_button} onClick={() => {
                            props.follow(el.id)
                        }}>Follow</button>}

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
            <button onClick={getUsers}>GET USERS</button>
        </div>
    )
}

export default Users