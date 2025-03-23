import React from "react";
import styles from "./contactUs.module.css";
import ContactUsUpperSection from "./ContactUsUpperSection";
import ContactUsMiddleSection from "./ContactUsMiddleSection";
import ContactUsBottomSection from "./ContactUsBottomSection";
export default function ContactUsPage() {
  return (
    <div className={styles.contactUsPageWrapper}>
      <div className={styles.contactUsPageMainContainer}>
        <ContactUsUpperSection />
        <ContactUsMiddleSection />
        <ContactUsBottomSection />
      </div>
    </div>
  );
}
