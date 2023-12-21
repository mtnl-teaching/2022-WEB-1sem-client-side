import styles from "./DetailsTitle.module.css";

export default function DetailsTitle({ name, job, website }) {
  return (
    <div className={styles.cardTitle}>
      <h2>{name}</h2>
      <h3>{job}</h3>
      <p className="body-text">{website}</p>
    </div>
  );
}
