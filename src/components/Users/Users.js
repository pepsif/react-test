import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
    // debugger
    let pages = [];
    for (let i = 1; i <= 8; i++) {
        pages.push(i
            // (i === 5 || i === 6 || i === 7 ? "." : i)
        )
    }
    return <div className={styles.users_section}>
        <h2 className={styles.users_title}>Users</h2>
        <div className={styles.pagination}>
            {
                pages.map(el => {
                    return <span key={el} className={(props.currentPage === el ? styles.selectedPage : '')}
                                 onClick={(event) => {props.onPageChanged(el)}}>
                                    {(el === 8 ? props.totalUsersCount : el)}
                             </span>
                })
            }
        </div>
        {
            props.users.map((el) => {
                return <div className={styles.user_block} key={el.id}>
                    <div className={styles.follow_block}>
                        <img className={styles.follow_image} src={require("../../icons/avatar-icon.jpg")}
                             alt="user foto"></img>
                        {
                            (el.followed) ? <button className={styles.follow_button} onClick={() => {
                                    props.unfollow(el.id)
                                }}>Unfollow</button>
                                : <button className={styles.follow_button} onClick={() => {
                                    props.follow(el.id)
                                }}>Follow</button>
                        }
                    </div>
                    <div className={styles.user_info_block}>
                        <span className={styles.user_name}>{el.name}</span>
                        <span className={styles.user_message}>{el.message}</span>
                        <span className={styles.user_country}>{el.country}</span>
                        <span className={styles.user_city}>{el.city}</span>
                    </div>
                </div>
            })
        }
        {/*<button onClick={props.getUsers}>GET USERS</button>*/}
    </div>

}

export default Users