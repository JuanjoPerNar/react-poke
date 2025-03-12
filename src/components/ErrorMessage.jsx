import React from "react";
import styles from "../App.module.css";

function ErrorMessage({ error }) {
  return <p className={styles.errorMessage}>{error}</p>
}

export default ErrorMessage
