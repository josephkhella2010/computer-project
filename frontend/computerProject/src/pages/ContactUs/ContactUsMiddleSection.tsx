import React from "react";
import styles from "./contactUs.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";
export default function ContactUsMiddleSection() {
  return (
    <div className={styles.contactUsMiddleSection}>
      <div className={styles.contactUsMiddleInnerSection}>
        <div className={styles.contactUsMiddleSectionContent}>
          <BsFillTelephoneFill className={styles.icon} />
          <p>Talk to us</p>
          <p>
            Interested in HubSpot’s software? Just pick up the phone to chat
            with a member of our sales team.
          </p>
          <p>
            <a href="tel:+46 20 015 91 62">+46 20 015 91 62</a>
          </p>
        </div>
        <div className={styles.contactUsMiddleSectionContent}>
          <IoChatbubbles className={styles.icon} />

          <p>Email us</p>
          <p>
            Sometimes you need a little help from your friends. Or a HubSpot
            support rep. Don’t worry… we’re here for you.
          </p>
          <p>
            <a href="mailto:marcoFaik@yahoo.com">marcoFaik@yahoo.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
