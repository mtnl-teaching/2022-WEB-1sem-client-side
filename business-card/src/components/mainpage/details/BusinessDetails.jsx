import portrait from "/src/assets/portrait.jpg";
import styles from "./BusinessDetails.module.css";
import DetailsTitle from "./DetailsTitle.jsx";
import MailButton from "./MailButton.jsx";
import DetailsDescription from "./DetailsDescription.jsx";
import DetailsFooter from "./DetailsFooter.jsx";

export default function BusinessDetails({ details }) {
  return (
    <div className={styles.container}>
      <div style={{ marginBottom: "15px" }}>
        <img src={portrait} alt="portrait" className={styles.portrait} />
        <DetailsTitle
          name={details.name}
          job={details.job}
          website={details.website}
        />
        <MailButton email={details.email} />
      </div>
      <DetailsDescription title={"About"} description={details.about} />
      <DetailsDescription title={"Interests"} description={details.interests} />
      <DetailsFooter />
    </div>
  );
}
