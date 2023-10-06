"use client";
import { ChangeEvent } from "react";
import style from "./Filters.module.css"

type FiltersPriceProps = {
    valueState: {
        minPrice: string; 
        maxPrice: string;
    };
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FiltersPrice: React.FC<FiltersPriceProps> = ({valueState, onChange}) => {
  return (
    <div>
      <p className={style.titlePrice}>Price</p>
        <div className={style.priceCont}>
          <div className={style.divPrice}>
            <input className={style.price}
              placeholder="min"
              type="number"
              id="minPrice"
              name="minPrice"
              value={valueState.minPrice}
              onChange={onChange}
            />
          </div>
          <div className={style.separation}></div>
          <div className={style.divPrice}>
            <input className={style.price}
              placeholder="max"
              type="number"
              id="maxPrice"
              name="maxPrice"
              value={valueState.maxPrice}
              onChange={onChange}
            />
          </div>
      </div>
    </div>
  );
};

export default FiltersPrice;