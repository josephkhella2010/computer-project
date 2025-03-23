import React from "react";
import styles from "./home.module.css";
import HomeSectionUpperSection from "./HomePageUpperSection";
import HomePageSectionTwo from "./HomePageSectionTwo";
export default function HomeSection() {
  return (
    <div className={styles.homepageWrapper}>
      <div className={styles.homepageMainContainer}>
        <HomeSectionUpperSection />
        <HomePageSectionTwo />
      </div>
    </div>
  );
}
