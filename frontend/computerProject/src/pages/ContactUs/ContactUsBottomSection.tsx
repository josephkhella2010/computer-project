import React from "react";
import styles from "./contactUs.module.css";
export default function ContactUsBottomSection() {
  return (
    <div className={styles.contactUsBottomSection}>
      <div className={styles.contactUsBottomInnerSection}>
        <img src="/Foto/map.png" alt="no foto" />
        <div className={styles.contactUsBottomInnerSectionText}>
          <p>
            <a href="">Cambridge, MA 02141</a>{" "}
          </p>
          <p>United States</p>
          <p>
            <a href="tel:+1 888 482 7768">+1 888 482 7768</a>{" "}
          </p>
          <p>
            <a href="mailto:marcokhella@yahoo.com">marcokhella@yahoo.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
