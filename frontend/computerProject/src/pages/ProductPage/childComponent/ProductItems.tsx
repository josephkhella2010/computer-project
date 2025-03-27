import React from "react";
import { productsType } from "./Products";
import styles from "../product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleDataRequest } from "../../../sliceReducers/GetSingleComputerDataSlice";
import { Link, useNavigate } from "react-router-dom";
interface Props {
  index: number;
  item: productsType;
}

export default function ProductItems({ item, index }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /*  function handleClick(id: number) {
    dispatch(fetchSingleDataRequest(id));
    navigate(`/product/${id}`);
          <button onClick={() => handleClick(id)}>see More</button>

  } */

  const { id, url, name, description, price } = item;
  //const placeholderImg = "https://picsum.photos/seed/picsum/200/300";
  return (
    <div className={styles.productItemContent}>
      <div className={styles.productImgContent}>
        <img src={url} alt={name}></img>
      </div>
      <div className={styles.productTextContent}>
        <h5>{name}</h5>
        <p>{description}</p>
        <p>price: {price}</p>
        <Link to={`/product/${id}`} state={item} className={styles.btn}>
          <button>see all</button>
        </Link>
      </div>
    </div>
  );
}
