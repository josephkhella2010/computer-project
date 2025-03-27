/* import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchRequest,
  productsType
} from "../../sliceReducers/getComputerDataSlice";
import { RootState } from "../../store/store";
import styles from "./singleProduct.module.css";
export default function SingleProductSection() {
  //const rb = useSelector((state) => state.singleComputerData.singleData);
  const dispatch = useDispatch();

  // Fetch all products when component mounts
  useEffect(() => {
    dispatch(fetchRequest());
  }, [dispatch]);
  const products: productsType[] = useSelector(
    (state: RootState) => state.computerData.computerData
  );
  const { id } = useParams();
  const idParamsNumber = Number(id);
  const singleProduct = products.find((item) => item.id === idParamsNumber);
  console.log(singleProduct);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const discountMount =
    Number(singleProduct?.price) * (Number(singleProduct?.discount) / 100);
  const finalPrice = Number(singleProduct?.price) - discountMount;
  function handleImgClick(index: number) {
    console.log(index);
  }

  return (
    <div className={styles.singleMainProductWrapper}>
      <div className={styles.singleProductWrapper}>
        <div className={styles.singleProductContainer}>
          <div className={styles.singleProductLeftSection}>
            <img
              src={singleProduct?.url}
              alt={singleProduct?.name}
              className={styles.mainImg}
            />
            <div className={styles.singleProductImgsSection}>
              {singleProduct?.imgs &&
                Array.isArray(singleProduct.imgs) &&
                singleProduct.imgs.map((item, index) => {
                  return (
                    <img
                      src={item}
                      alt="not found"
                      key={index}
                      onClick={() => handleImgClick(index)}
                    />
                  );
                })}
            </div>
          </div>
          <div className={styles.singleProductRightSection}>
            <h3>{singleProduct?.name}</h3>
            <h6>{singleProduct?.description}</h6>
            <p className={`${styles.price}`}>
              {" "}
              Price is:{"  "}
              <span
                className={`${
                  singleProduct?.discount !== "" ? styles.throwLineClass : ""
                }`}>
                {singleProduct?.price} $
              </span>
            </p>
            {singleProduct?.discount !== "" ? (
              <p>
                {" "}
                This product have{" "}
                <span className={styles.discount}>
                  {singleProduct?.discount} %
                </span>{" "}
                discount
              </p>
            ) : (
              ""
            )}
            {singleProduct?.discount !== "" ? (
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
      </div>
    </div>
  ); 
}
  */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchRequest,
  productsType
} from "../../sliceReducers/getComputerDataSlice";
import { RootState } from "../../store/store";
import styles from "./singleProduct.module.css";
export default function SingleProductSection() {
  //const rb = useSelector((state) => state.singleComputerData.singleData);
  const dispatch = useDispatch();

  // Fetch all products when component mounts
  useEffect(() => {
    dispatch(fetchRequest());
  }, [dispatch]);
  const products: productsType[] = useSelector(
    (state: RootState) => state.computerData.computerData
  );
  const { id } = useParams();
  const idParamsNumber = Number(id);
  const singleProduct = products.find((item) => item.id === idParamsNumber);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const discountMount =
    Number(singleProduct?.price) * (Number(singleProduct?.discount) / 100);
  const finalPrice = Number(singleProduct?.price) - discountMount;
  function handleImgClick(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div className={styles.singleMainProductWrapper}>
      <div className={styles.singleProductWrapper}>
        <div className={styles.singleProductContainer}>
          <div className={styles.singleProductLeftSection}>
            <img
              src={
                singleProduct?.imgs?.[currentIndex] || singleProduct?.imgs?.[0]
              }
              alt={singleProduct?.name}
              className={styles.mainImg}
            />
            <div className={styles.singleProductImgsSection}>
              {singleProduct?.imgs &&
                Array.isArray(singleProduct.imgs) &&
                singleProduct.imgs.map((item, index) => {
                  return (
                    <img
                      src={item}
                      alt="not found"
                      key={index}
                      onClick={() => handleImgClick(index)}
                      className={
                        currentIndex === index ? styles.selectedImg : ""
                      }
                    />
                  );
                })}
            </div>
          </div>
          <div className={styles.singleProductRightSection}>
            <h3>{singleProduct?.name}</h3>
            <h6>{singleProduct?.description}</h6>
            <p className={`${styles.price}`}>
              {" "}
              Price is:{"  "}
              <span
                className={`${
                  singleProduct?.discount !== 0 ? styles.throwLineClass : ""
                }`}>
                {singleProduct?.price} $
              </span>
            </p>
            {singleProduct?.discount !== 0 ? (
              <p>
                {" "}
                This product have{" "}
                <span className={styles.discount}>
                  {singleProduct?.discount} %
                </span>{" "}
                discount
              </p>
            ) : (
              ""
            )}
            {singleProduct?.discount !== 0 ? (
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
      </div>
    </div>
  );
}
