import styles from './Header.module.css'
import Logo_block from "./Logo block/Logo_block";
import Navigation from "./Navigation/Navigation";


const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo_block />
                <Navigation />

            </div>
        </header>

    )
}

export default Header