import React, { useState } from "react";
import styles from "../Navigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function MobileNavBar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const addClassActive = showMenu ? styles.active : "";
  const addClassShow = showMenu ? styles.show : "";
  const navigate = useNavigate();

  return (
    <div className={styles.MainNavBar}>
      <div className={styles.mobileNavBar}>
        <img src="/logo.svg" alt="not Found" onClick={() => navigate("/")} />
        <div
          className={`${styles.hamMenu} ${addClassActive}`}
          onClick={() => setShowMenu(!showMenu)}>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.line} `}></div>
        </div>
        <div
          className={`${styles.mobileOverLay} ${addClassShow}`}
          onClick={() => setShowMenu(!showMenu)}>
          <div className={styles.sideMenu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.backDiv} onClick={() => setShowMenu(false)}>
              <BiArrowBack className={styles.backIcon} />
              <p>Back</p>
            </div>
            <ul>
              <li onClick={() => setShowMenu(false)}>
                <Link to="/">About us</Link>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <Link to="/product">Our Products</Link>
              </li>
              <li onClick={() => setShowMenu(false)}>
                <Link to="/contactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
