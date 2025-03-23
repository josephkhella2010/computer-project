import React from "react";
import styles from "./home.module.css";
export default function HomePageSectionTwo() {
  return (
    <div className={styles.HomePageSecondSection}>
      <h1>Why Buy USA Used Laptops?</h1>
      <p>
        There are many reasons why USA used laptops are preferred to new laptops
        bought here in Nigeria, it’s not just because of its affordability but
        also the assurance of getting a laptop made with original and quality
        materials that are durable.
      </p>
      <p>
        The United States set standards that regulate production of products in
        their country which reduces the chances of producing substandard
        products.{" "}
      </p>
      <p>
        Hence, laptops sold in USA are of good quality standard, unlike many
        fake brands and refurbished laptops packaged as brand new sold in
        Nigeria.
      </p>
      <p>
        Imported fairly used laptops serve almost the same purpose as laptop
        bought directly from the Original Equipment Manufacturers (OEM). This
        and many more are reasons why it’s preferable you purchase USA used
        laptops rather than new laptops sold in Nigeria.
      </p>
      <div className={styles.HomePageSecondSectionInnerContent}>
        <div className={styles.homePageInnerSection}>
          <h4>GREAT VALUE</h4>
          <p>
            We offer you quality and clean UK used laptop computers at
            affordable prices.
          </p>
        </div>
        <div className={styles.homePageInnerSection}>
          <h4>CONFIDENCE</h4>
          <p>
            All our products are tested and confirmed ok, with 30 days limited
            warranty.
          </p>
        </div>
        <div className={styles.homePageInnerSection}>
          <h4>SHOPINVERSE Iwoa</h4>

          <p>
            <a href="tel:0010104451234">0010104451234</a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps?q=Suite+FF+08,+Aminasia+Trade+Centre,+Aminu+Kano+Crescent,+Wuse+2,+Abuja"
              target="_blank">
              📍 Suite FF 08, Aminasia Trade Centre, Aminu Kano Crescent, Wuse
              2, Abuja.
            </a>
          </p>
        </div>
        <div className={styles.homePageInnerSection}>
          <h4>COMPLAINTS</h4>
          <p>
            Have a complain? Whatsapp{" "}
            <a href="tel:0010104451234">0010104451234</a>
          </p>
        </div>
      </div>
    </div>
  );
}
