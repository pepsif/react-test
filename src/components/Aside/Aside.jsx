import styles from './Aside.module.css'
import {NavLink} from "react-router-dom";


const Aside = (props) => {

    return (
        <div className={styles.aside}>
            <ul className={styles.nav_list}>
                <li className={styles.item}>
                    <NavLink to="/profile" className={styles.item_link}>User Profile</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/dialogs" className={styles.item_link}>Dialogs<span className={styles.span}> {props.message} messages</span></NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/posts" className={styles.item_link}>Posts</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/music" className={styles.item_link}>Music</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/settings" className={styles.item_link}>Settings</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Aside