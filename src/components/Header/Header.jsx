import styles from './Header.module.css'
import LogoBlock from "./Logo block/Logo_block";
import Navigation from "./Navigation/Navigation";
import UserBlock from "./UserBlock/UserBlock";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <LogoBlock />
                {/* <Navigation /> */}
                <UserBlock isAuth={props.isAuth} login={props.login}/>

            </div>
        </header>

    )
}

export default Header