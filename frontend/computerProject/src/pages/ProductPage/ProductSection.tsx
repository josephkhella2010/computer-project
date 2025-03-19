import React from "react";
import Products from "./childComponent/Products";
import styles from "./product.module.css";
export default function ProductSection() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <Products />
      </div>
    </div>
  );
}
