import { useState } from "react";
import styles from "./TheHeader.module.css";
import CreateBusinessCard from "./CreateBusinessCard";
import MyButton from "../atoms/MyButton";
import { Link } from "react-router-dom";

export default function TheHeader() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <header className={styles.header}>
      <h1>Business card</h1>
      <Link to={"/login"}>Go to login page</Link>
      <MyButton text="Create new" onClick={handleClick} />
      <CreateBusinessCard showModal={showModal} closeModal={closeModal} />
    </header>
  );
}
