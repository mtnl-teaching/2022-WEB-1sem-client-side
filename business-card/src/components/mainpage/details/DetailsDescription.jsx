import styles from "./DetailsDescription.module.css";

const DetailsDescription = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default DetailsDescription;
