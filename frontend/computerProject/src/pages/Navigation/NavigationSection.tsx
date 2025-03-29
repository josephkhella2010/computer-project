import React, { useEffect, useState } from "react";
import DesktopNavigation from "./childComponent/DesktopNavigation";
import MobileNavBar from "./childComponent/MobileNavBar";
import styles from "./Navigation.module.css";

export default function NavigationSection() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const addScrollClass = isScroll ? styles.scrolled : "";
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div>
      {isMobile ? (
        <MobileNavBar isScroll={isScroll} />
      ) : (
        <DesktopNavigation isScroll={isScroll} />
      )}
    </div>
  );
}
