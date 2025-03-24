import React from "react";
import styles from "./aboutUs.module.css";
import AboutUsImgContainer from "./childComponent/AboutUsImgContainer";
import AboutUsActiveSectionPage from "./childComponent/AboutUsActiveSection";
import AboutUsContact from "./childComponent/AboutUsContact";

export default function AboutUsPage() {
  return (
    <div className={styles.aboutUsPageWrapper}>
      <div className={styles.aboutUsPageMainContainer}>
        <AboutUsImgContainer />
        <AboutUsActiveSectionPage />
        <AboutUsContact />
      </div>
    </div>
  );
}
