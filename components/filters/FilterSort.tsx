"use client";
import { ChangeEvent } from "react";
import style from "./Filters.module.css"

type FiltersSortProps = {
  valueState: {
    order: string;
  };
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const FiltersSort: React.FC<FiltersSortProps> = ({ valueState, onChange }) => {
  return (
    <div>
      <div className={style.catCont}>
        <label htmlFor="order" className={style.catTitle}>Sort By:</label>
        <select name="order" value={valueState.order} onChange={onChange} className={style.selectCat}>
          <option value="">None</option>
          <option value="lower">Price (Low to High)</option>
          <option value="higher">Price (High to Low)</option>
          <option value="name_asc">Name (A to Z)</option>
          <option value="name_desc">Name (Z to A)</option>
        </select>
      </div>
    </div>
  );
};

export default FiltersSort;
