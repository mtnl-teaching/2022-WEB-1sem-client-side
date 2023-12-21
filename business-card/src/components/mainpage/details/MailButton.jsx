import styles from "./MailButton.module.css";
import { Mail } from "lucide-react";

const MailButton = ({ email }) => {
  const contact = () => {
    window.open(`mailto:${email}`);
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={contact}>
        <div className={styles.innerContainer}>
          <Mail size={16} className={styles.icon} />
          Email
        </div>
      </button>
    </div>
  );
};

export default MailButton;
