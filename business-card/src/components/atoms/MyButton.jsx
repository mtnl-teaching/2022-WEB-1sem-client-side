import styles from "./MyButton.module.css";

export default function MyButton({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
}
