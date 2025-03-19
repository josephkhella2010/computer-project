import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import styles from "../product.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchComputerData,
  fetchLoading,
  fetchRequest
} from "../../../sliceReducers/getComputerDataSlice";
import { RootState } from "@reduxjs/toolkit/query";

export interface productsType {
  id: number;
  url: string;
  name: string;
  description: string;
  price: string;
  imgs?: string[];
}
export default function Products() {
  const [products, setProducts] = useState<productsType[]>([]);
  const dispatch = useDispatch();

  /*  const { computerData, loading, error } = useSelector(
    (state: RootState) => state.computerData
  ); */
  const productsData = useSelector(
    (state: RootState) => state.computerData.computerData
  );
  useEffect(() => {
    dispatch(fetchRequest());
  }, [dispatch]);

  useEffect(() => {
    setProducts(productsData); // Update local state when computerData changes
  }, [productsData]);

  return (
    <div className={styles.productMainContainer}>
      <h1>productsitem</h1>

      <div className={styles.ProductContainer}>
        {products &&
          products.map((item, index) => {
            return <ProductItems item={item} index={index} key={index} />;
          })}
      </div>
    </div>
  );
}
