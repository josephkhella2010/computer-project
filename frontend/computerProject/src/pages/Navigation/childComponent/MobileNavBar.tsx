import React, { useEffect, useState } from "react";
import styles from "../Navigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
interface Props {
  isScroll: boolean;
  setIsScroll: (isScroll: boolean) => void;
}
export default function MobileNavBar({ isScroll, setIsScroll }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const addClassActive = showMenu ? styles.active : "";
  const addClassShow = showMenu ? styles.show : "";
  const navigate = useNavigate();
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      setIsScroll(false);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu, setIsScroll]);

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
          className={`${styles.mobileOverLay} ${addClassShow} `}
          onClick={() => setShowMenu(!showMenu)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles.sideMenu} `}>
            <div
              className={styles.backDiv}
              onClick={() => {
                setShowMenu(false);
                setIsScroll(true);
              }}>
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
