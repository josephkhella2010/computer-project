import React from "react";
import styles from "../Navigation.module.css";
import { Link } from "react-router-dom";

export default function DesktopNavigation() {
  return (
    <div className={styles.MainNavBar}>
      <div className={styles.navBar}>
        <Link to="/">
          <img src="/logo.svg" alt="not Found" />
        </Link>
        <ul>
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/product">Our Products</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
