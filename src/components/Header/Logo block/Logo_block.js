import styles from "./Logo_block.module.css";
import logo from "../../../gin.png";

const LogoBlock = () => {
    return (
        <div className={styles.logo_block}>
            <img className={styles.logo} src={logo} alt="logo"></img>
            <span className={styles.title}>gintoniK</span>
        </div>
    )
}

export default LogoBlock