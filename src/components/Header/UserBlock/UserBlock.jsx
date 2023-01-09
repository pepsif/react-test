import React from 'react'
import styles from './UserBlock.module.css'
import { NavLink } from "react-router-dom";
import userFoto from "../../../icons/user.png"

const UserBlock = (props) => {
    return (
        <div className={styles.user_block}>
            {props.isAuth ?
                <div className='user-login-block'>
                    <NavLink className={styles.login} to={'/login'}>{props.login}</NavLink>
                </div> :
                <div className='user-login-block'>
                    <img className={styles.userPhoto} src={userFoto}></img>
                    <NavLink className={styles.login} to={'/login'}>Login</NavLink>
                </div>

            }
        </div>
    )
}

export default UserBlock

