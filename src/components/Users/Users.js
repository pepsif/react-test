import React from "react";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {instance} from '../../api/api'

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
                                 onClick={(event) => {
                                     props.onPageChanged(el)
                                 }}>
                                    {(el === 8 ? props.totalUsersCount : el)}
                             </span>
                })
            }
        </div>
        {
            props.users.map((el) => {
                return <div className={styles.user_block} key={el.id}>
                    <div className={styles.follow_block}>
                        <NavLink to={'/profile/' + el.id}>
                            <img className={styles.follow_image} src={require("../../icons/avatar-icon.jpg")}
                                 alt="user foto"></img>
                        </NavLink>
                        {
                            (el.followed) ? <button className={styles.follow_button} onClick={() => {
                                    instance.delete(`follow/${el.id}`)
                                        .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(el.id)
                                                }
                                                console.log(response)
                                            }
                                        )
                                    props.unfollow(el.id)
                                }}>Unfollow</button>
                                : <button className={styles.follow_button} onClick={() => {
                                    instance.post(`follow/${el.id}`, {})
                                        .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(el.id)
                                                }
                                                console.log(response)
                                            }
                                        )
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
    </div>
}

export default Users