import reactLogo from "../assets/react.svg"
import styles from "./Navbar.module.css"

const Navbar = () => {
    const navStyles = {
        display: "flex",
        alignItems: "center",
        padding: "30px",
        backgroundColor: "#21222A",
    }

    const h2Styles = {
        color: "#00D8FF",
        marginRight: "auto",
    }

    const pStyles = {
        color: "#DEEBF8",
    }

    return (
        <nav style={navStyles}>
            <img src={reactLogo} width="40px" alt="React logo"/>
            <h2 style={h2Styles}>ReactFacts</h2>
            <p style={pStyles}>React Course - Project 1</p>
        </nav>
    );
}

export default Navbar;