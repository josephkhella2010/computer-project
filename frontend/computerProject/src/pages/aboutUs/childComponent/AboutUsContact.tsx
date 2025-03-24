import React from "react";
import styles from "../aboutUs.module.css";
import { useNavigate } from "react-router-dom";

export default function AboutUsContact() {
  const navigate = useNavigate();
  return (
    <div className={styles.aboutUsContactSection}>
      <img src="/Foto/aboutUsThree.jpg" alt="non foto" />
      <div className={styles.aboutUsContactTextContext}>
        <h2>Interested in our formula? Feel free to contact us!</h2>
        <button onClick={() => navigate("/contactUs")}>Contact us</button>
      </div>
    </div>
  );
}
