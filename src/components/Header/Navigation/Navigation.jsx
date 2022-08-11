import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li className={styles.item}>product</li>
                <li className={styles.item}>electron</li>
                <li className={styles.item}>shopping</li>
                <li className={styles.item}>about us</li>
            </ul>
        </nav>
    )
}
export default Navigation