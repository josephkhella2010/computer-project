import React from "react";
import { productsType } from "./Products";
import styles from "../product.module.css";
import { Link } from "react-router-dom";
interface Props {
  index: number;
  item: productsType;
}

export default function ProductItems({ item, index }: Props) {
  console.log(index);
  const { id, url, name, price, description, discount, finalPrice } = item;
  return (
    <div className={styles.productItemContent}>
      <div className={styles.productImgContent}>
        <img src={url} alt={name}></img>
      </div>
      <div className={styles.productTextContent}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div>
          <p className={`${styles.price}`}>
            {" "}
            Price is:{"  "}
            <span className={`${discount !== 0 ? styles.throwLineClass : ""}`}>
              {price} $
            </span>
          </p>
          {discount !== 0 ? (
            <p>
              {" "}
              This product have{" "}
              <span className={styles.discount}>{discount} %</span> discount
            </p>
          ) : (
            ""
          )}
          {discount !== 0 ? (
            <p>
              {" "}
              Final price is{"  "}
              <span className={`${styles.price}`}> {finalPrice} $</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <Link to={`/product/${id}`} state={item} className={styles.btn}>
        <button>see all</button>
      </Link>
    </div>
  );
}
