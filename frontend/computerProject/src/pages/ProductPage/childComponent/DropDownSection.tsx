import React, { useState } from "react";
import styles from "../product.module.css";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp
} from "react-icons/md";
import { filterArrType } from "./Products";

interface priceType {
  priceFilterArr: filterArrType[];
  dropDownVal: string;
  handleValue: (val: string) => void;
}
export default function DropDownSection({
  priceFilterArr,
  dropDownVal,
  handleValue
}: priceType) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  return (
    <div
      className={styles.dropDownContainer}
      onClick={() => setShowDropDown(!showDropDown)}>
      <span>{dropDownVal}</span>
      {showDropDown ? (
        <MdOutlineKeyboardArrowUp />
      ) : (
        <MdOutlineKeyboardArrowDown />
      )}

      {showDropDown && (
        <div className={styles.dropDownMenu}>
          {priceFilterArr &&
            priceFilterArr.map((item, index) => {
              return (
                <p key={index} onClick={() => handleValue(item.value)}>
                  {item.label}
                </p>
              );
            })}
        </div>
      )}
    </div>
  );
}
