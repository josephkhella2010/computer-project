import React, { useEffect } from "react";
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
  const placeholderImg = "https://picsum.photos/seed/picsum/200/300";

  return (
    <div className={styles.singleMainProductWrapper}>
      <div className={styles.singleProductWrapper}>
        <div className={styles.singleProductContainer}>
          <div className={styles.singleProductRightSection}>
            <img src={placeholderImg} alt={singleProduct?.name} />
            <div className={styles.singleProductImgsSection}>
              {singleProduct?.imgs &&
                Array.isArray(singleProduct.imgs) &&
                singleProduct.imgs.map((item, index) => {
                  console.log(item);
                  return <img src={item} alt="not found" key={index} />;
                })}
            </div>
          </div>
          <div className={styles.singleProductRightSection}>
            <h4>{singleProduct?.name}</h4>
            <h6>{singleProduct?.description}</h6>
            <p> price: {singleProduct?.price} $</p>
          </div>
        </div>
      </div>
    </div>
  );
}
