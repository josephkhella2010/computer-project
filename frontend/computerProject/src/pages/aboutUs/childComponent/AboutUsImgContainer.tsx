import React from "react";
import styles from "../aboutUs.module.css";

export default function AboutUsImgContainer() {
  return (
    <div className={styles.aboutUsUpperContainer}>
      <div className={styles.aboutUsImgContainer}>
        <img src="/Foto/aboutUs.jpg" alt="not found" />
      </div>
      <div className={styles.aboutUsUpperContainerHeader}>
        <h1>Profitable and circular: </h1>

        <h1>Where your succes betters the world</h1>
      </div>
      <div className={styles.aboutUsMiddleSection}>
        <div className={styles.aboutUsMiddleSectionText}>
          <h1>A Quarter-Century of Trusted Resale</h1>
          <p>
            At Used Products. What makes us special is our focus on buying,
            selling, and pawning a wide range of sustainable products, both new
            and second-hand. We offer instant (cash) money to customers for
            their items, and then, with every purchase, we provide a warranty.
          </p>
          <p>
            What sets us apart is our unique combination of physical shops and a
            strong online presence. This allows us to serve our customers
            exceptionally well, meeting a diverse set of needs efficiently and
            with a lot of expertise. With more than 5 years of experience in
            supporting franchisees, we offer a franchise formula that’s not only
            sustainable but also ready for the future.
          </p>
          <p>
            Our goal is to create shops that go beyond the typical second-hand
            shop. We want our shops to look and feel just like brand-new retail
            stores, providing a comfortable environment where customers feel
            right at home. This dedication to quality and customer comfort is
            what makes us different from other second-hand stores, offering a
            shopping experience that’s truly one-of-a-kind and top-notch
          </p>
        </div>
        <div className={styles.aboutUsMiddleSectionImg}>
          <img src="/Foto/aboutUsTwo.jpeg" alt="not found" />
        </div>
      </div>
    </div>
  );
}
