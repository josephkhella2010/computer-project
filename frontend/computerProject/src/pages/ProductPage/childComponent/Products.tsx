import React, { useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import styles from "../product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest } from "../../../sliceReducers/getComputerDataSlice";
import { CiSearch } from "react-icons/ci";
import DropDownSection from "./DropDownSection";
import { RootState } from "../../../store/store";

export interface productsType {
  id: number;
  url: string;
  name: string;
  description: string;
  price: string;
  imgs?: string[];
}
export interface filterArrType {
  label: string;
  value: string;
}
export default function Products() {
  const [products, setProducts] = useState<productsType[]>([]);
  const [searchVal, setSearchVal] = useState<string>("");
  const [dropDownVal, setDropDownVal] = useState<string>("Choose price");
  const priceFilterArr: filterArrType[] = [
    { label: "Cheaper", value: "Cheaper" },
    { label: "Expensive", value: "Expensive" }
  ];
  const dispatch = useDispatch();

  const productsData = useSelector(
    (state: RootState) => state.computerData.computerData || []
  );
  useEffect(() => {
    dispatch(fetchRequest());
  }, [dispatch]);

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////7
  /*  filter section */
  const handleValue = (val: string) => {
    setDropDownVal(val);
    filterSection(searchVal, val);
  };

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const newVal = e.target.value;
    setSearchVal(newVal);
    filterSection(newVal, dropDownVal);
  }

  function filterSection(searchVal: string, dropVal: string) {
    let filteredProduct = [...productsData];

    if (searchVal) {
      filteredProduct = filteredProduct.filter(
        (item: productsType) =>
          item.name.toLowerCase().includes(searchVal.toLowerCase()) // Case-insensitive search
      );
    }

    if (dropVal === "Expensive") {
      filteredProduct = [...filteredProduct].sort(
        (a: productsType, b: productsType) => Number(b.price) - Number(a.price)
      );
    } else if (dropVal === "Cheap") {
      filteredProduct = [...filteredProduct].sort(
        (a: productsType, b: productsType) => Number(a.price) - Number(b.price)
      );
    }

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
        <div>
          <DropDownSection
            priceFilterArr={priceFilterArr}
            dropDownVal={dropDownVal}
            handleValue={handleValue}
          />
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
