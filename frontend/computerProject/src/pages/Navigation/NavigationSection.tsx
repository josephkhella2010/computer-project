import React, { useEffect, useState } from "react";
import DesktopNavigation from "./childComponent/DesktopNavigation";
import MobileNavBar from "./childComponent/MobileNavBar";

export default function NavigationSection() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
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
        <MobileNavBar isScroll={isScroll} setIsScroll={setIsScroll} />
      ) : (
        <DesktopNavigation isScroll={isScroll} />
      )}
    </div>
  );
}
