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
import { CiSearch } from "react-icons/ci";

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
  const [searchVal, setSearchVal] = useState<string>("");
  const dispatch = useDispatch();

  const productsData = useSelector(
    (state: RootState) => state.computerData.computerData || []
  );
  useEffect(() => {
    dispatch(fetchRequest());
  }, [dispatch]);

  useEffect(() => {
    setProducts(productsData); // Update local state when computerData changes
  }, [productsData]);
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const newVal = e.target.value;
    setSearchVal(newVal);

    // Ensure productsData is an array before filtering
    const filteredProduct = productsData.filter(
      (item: productsType) =>
        item.name.toLowerCase().includes(newVal.toLowerCase()) // Case-insensitive search
    );
    console.log(filteredProduct);
    setProducts(filteredProduct);
  }

  return (
    <div className={styles.productMainContainer}>
      <div className={styles.filterSection}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="search"
            value={searchVal}
            onChange={(e) => handleSearch(e)}
          />
          <CiSearch />
        </div>
      </div>
      <div className={styles.ProductContainer}>
        {products &&
          products.map((item, index) => {
            return <ProductItems item={item} index={index} key={index} />;
          })}
      </div>
    </div>
  );
}
