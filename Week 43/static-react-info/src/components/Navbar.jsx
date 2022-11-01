import reactLogo from "../assets/react.svg"
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.myNav}>
            <img src={reactLogo} width="40px" alt="React logo"/>
            <h2>ReactFacts</h2>
            <p>React Course - Project 1</p>
        </nav>
    );
}

export default Navbar;