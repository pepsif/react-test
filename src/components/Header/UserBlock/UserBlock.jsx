import React from 'react'
import styles from './UserBlock.module.css'
import {NavLink} from "react-router-dom";

const UserBlock = (props) => {
    // console.log(props.props.login)
       return(
        <div>
            {props.isAuth ? props.login : <NavLink className={styles.login} to={'/login'}>Login</NavLink> }

        </div>
    )
}

export default UserBlock

