import React from "react";
import styles from "./home.module.css";
import { imgArrType } from "../../helps/interfaces";
import { useNavigate } from "react-router-dom";
export default function HomeSectionUpperSection() {
  const imgArr: imgArrType[] = [
    { name: "firstFoto", url: "/Foto/homePhoto/lapOne.webp" },
    { name: "secondFoto", url: "/Foto/homePhoto/lapTwo.jpg" },
    { name: "thirdFoto", url: "/Foto/homePhoto/lapThree.jpg" },
    { name: "FourthFoto", url: "/Foto/homePhoto/lapFour.webp" }
  ];
  const navigate = useNavigate();
  return (
    <div className={styles.HomePageUpperSection}>
      <h1>Used laptops & notebooks</h1>
      <p>
        Used laptops and notebooks are a great opportunity for those who want a
        high-quality computer at a more affordable price, while contributing to
        a more sustainable world. With a used laptop, you can work wherever you
        want, and you also make a contribution to our planet.
      </p>
      <p>
        Our refurbished laptops and computers have been wiped of all information
        and have been refurbished to super condition by our skilled technicians.
        In addition, we offer a minimum of 1 year warranty, free support and a
        30-day money-back guarantee, so you can feel confident in your
        investment.
      </p>
      <p>
        Our technicians carefully examine each unit, and they are then
        classified based on condition as New, Very Good or Fair. Units in the
        New condition category are in the absolute best condition and are almost
        impossible to distinguish from a new unit. Those in the Very Good
        condition category are our most popular category, and they impress
        neighbors and colleagues alike with their fine used condition. Units in
        the Fair condition category have clear signs of use, but are still 100%
        functional and still include a warranty.
      </p>
      <h2>Sustainability and quality in one</h2>
      <p>
        Buying used is a good decision for both your finances and the planet.
        You get a high-quality device, with the same features and capabilities
        as a new device, for a fraction of the price. By doing a little research
        and ensuring that the device has the desired specification and is in
        good condition, you can get a device that you can enjoy for a long time.
      </p>
      <p>
        So if you're looking for a computer but want to avoid the high price tag
        of a new device, consider a used laptop or notebook. Not only will you
        save money, but you'll also be doing your bit for our planet.
      </p>
      <div className={styles.homePageFotoContainer}>
        {imgArr &&
          imgArr.map((foto, index) => {
            return <img src={foto.url} alt={foto.name} key={index} />;
          })}
      </div>
      <div className={styles.productsBtn}>
        <button onClick={() => navigate("/product")}>Our Products</button>
      </div>
    </div>
  );
}
