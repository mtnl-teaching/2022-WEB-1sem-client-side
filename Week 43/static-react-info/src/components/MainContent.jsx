import styles from "./MainContent.module.css"

const MainContent = () => {
    return (
        <div style={containerStyle}>
            <h1>Fun Facts about React</h1>
            <ul className={styles.myUl}>
                <li style={padding}>Was first released in 2013</li>
                <li style={padding}>Was originally created by Jordan Walke</li>
                <li style={padding}>Almost 200k stars on Github</li>
                <li style={padding}>Is maintained by Facebook</li>
                <li style={padding}>Powers thousands of enterprise apps, including mobile apps</li>
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

const padding = {
    padding: "10px"
}

export default MainContent;