import styles from "./MainContent.module.css"

const MainContent = () => {
    return (
        <div style={containerStyle}>
            <h1>Fun Facts about React</h1>
            <ul className={styles.myUl}>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
}

const containerStyle = {
    height: "100vh",
    color: "#FFFFFF",
    padding: "30px",
    backgroundColor: "#282D35",
}

export default MainContent;