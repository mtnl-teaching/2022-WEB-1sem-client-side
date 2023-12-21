import Modal from "react-modal";
import { useState } from "react";
import styles from "./CreateBusinessCard.module.css";
import MyButton from "../atoms/MyButton";
import Spinner from "../atoms/Spinner";
import { useReducer } from "react";

export default function CreateBusinessCard({ showModal, closeModal }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Temporary error message");

  const reducer = (state, newValues) => {
    return { ...state, ...newValues };
  };

  const [formValues, dispatch] = useReducer(reducer, {
    name: "",
    job: "",
    website: "",
    isTeacher: false,
  });

  const updateFormValue = (event) => {
    const { name, value, type, checked } = event.target;
    const result = type === "radio" || type === "checkbox" ? checked : value;
    dispatch({
      [name]: result,
    });
  };

  const handleCreate = () => {
    setIsLoading(true);
    fetch("google.com", {
      method: "POST",
      body: JSON.stringify(formValues),
    });
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Create new business card"
      className={styles.modal}
    >
      <div className={`${styles.defaultFlex} ${styles.container}`}>
        <h1>Create a new business contact</h1>
        <div className={styles.defaultFlex}>
          <input
            type={"checkbox"}
            name="isTeacher"
            onChange={updateFormValue}
            checked={formValues.isTeacher}
          />
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formValues.name}
            onChange={updateFormValue}
          />
          <input
            type="text"
            placeholder="Job title"
            name="job"
            value={formValues.job}
            onChange={updateFormValue}
          />
          <input
            type="text"
            placeholder="Website"
            name="name"
            value={formValues.website}
            onChange={updateFormValue}
          />
        </div>
        {errorMsg && <p>{errorMsg}</p>}
        {isLoading ? (
          <Spinner />
        ) : (
          <MyButton text="Create" onClick={handleCreate} />
        )}
      </div>
    </Modal>
  );
}
