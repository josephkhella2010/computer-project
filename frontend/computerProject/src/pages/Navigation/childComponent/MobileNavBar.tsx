import React, { useEffect, useState } from "react";
import styles from "../Navigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
interface Props {
  isScroll: boolean;
}
export default function MobileNavBar({ isScroll }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const addClassActive = showMenu ? styles.active : "";
  const addClassShow = showMenu ? styles.show : "";
  const navigate = useNavigate();
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup: when the component unmounts or `showMenu` changes, reset the overflow style.
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled when cleanup happens
    };
  }, [showMenu]);

  return (
    <div className={styles.MainNavBar}>
      <div
        className={`${styles.mobileNavBar} ${isScroll ? styles.scrolled : ""}`}>
        <img src="/logo.svg" alt="not Found" onClick={() => navigate("/")} />
        <div
          className={`${styles.hamMenu} ${addClassActive}`}
          onClick={() => setShowMenu(!showMenu)}>
          <div className={`${styles.line}`}></div>
          <div className={`${styles.line} `}></div>
        </div>
        <div
          className={`${styles.mobileOverLay} ${addClassShow} ${
            isScroll ? styles.stopScrolled : ""
          }`}
          onClick={() => setShowMenu(!showMenu)}>
          <div className={styles.sideMenu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.backDiv} onClick={() => setShowMenu(false)}>
              <BiArrowBack className={styles.backIcon} />
              <p>Back</p>
            </div>
            <ul>
              <li onClick={() => setShowMenu(false)}>
                <Link to="/aboutUs">About us</Link>
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
