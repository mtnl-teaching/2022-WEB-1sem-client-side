import styles from "./MainContent.module.css"
import MyLi from "./MyLi";

const MainContent = () => {
    return (
        <div style={containerStyle}>
            <h1>Fun Facts about React</h1>
            <ul className={styles.myUl}>
                <MyLi message="Was first released in 2013" />
                <MyLi message="Was originally created by Jordan Walke" />
                <MyLi message="Almost 200k stars on Github" />
                <MyLi message="Is maintained by Facebook" />
                <MyLi message="Powers thousands of enterprise apps, including mobile apps" />
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