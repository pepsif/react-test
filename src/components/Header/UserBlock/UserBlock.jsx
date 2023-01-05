import React from 'react'
import styles from './UserBlock.module.css'
import {NavLink} from "react-router-dom";
import userFoto from "../../../icons/user.png"

const UserBlock = (props) => {
    return(
        <div>
            {props.isAuth ? props.login :
                <div>
                    <img className={styles.userPhoto} src={userFoto}></img>
                    <NavLink className={styles.login} to={'/login'}>Login</NavLink>
                </div>

            }
        </div>
    )
}

export default UserBlock

