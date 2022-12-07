import React from "react";
import styles from "./Users.module.css"

const Users = (props) => {
// debugger
    if(props.users.length === 0 ) {
      props.setUsers( 
    [ {
        id: 1,
        placefolder: "users-reducer",
        follow: false,
        name: "Stepan S",
        message: "Hy friends from user-reducer!!!",
        country: "Ukraine",
        city: "Kiev",
      },
      {
        id: 2,
        follow: true,
        name: "Alena K",
        message: "Hellooo!!!",
        country: "Sweden",
        city: "Pillou",
      },
      {
        id: 3,
        follow: false,
        name: "Anatoliy S",
        message: "Job well done",
        country: "Ukraine",
        city: "Ternopil",
      }])   
    }
   
   
// debugger

    const UsersElements = props.users.map(el => {
        // debugger

        
        return (
            <div className={styles.user_block} key={el.id}>
                <div className={styles.follow_block}>
                    <img className={styles.follow_image} src={require("../../icons/avatar-icon.jpg")} alt="user foto"></img>
                    {(el.follow ) ? <button className={styles.follow_button} onClick={ ()=>{props.unfollow(el.id)}}>Unfollow</button>
                        : <button className={styles.follow_button} onClick={ ()=>{props.follow(el.id)}}>Follow</button>}

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