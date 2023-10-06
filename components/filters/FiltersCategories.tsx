"use client";
import { ChangeEvent } from "react";
import style from "./Filters.module.css"

type FiltersCategoriesProps = {
    valueState: {
      category: string;
    };
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  }

const FiltersCategories: React.FC<FiltersCategoriesProps> = ({ valueState, onChange }) => {
  const category = [ "breakfast", "beverages", "snacks", "dairy"].map(
    (item) => <option key={item} value={item}>{item}</option>
  );

  return (
    <div className={style.catCont}>
      <label htmlFor="category" className={style.catTitle}>Categories</label>
      <select name="category" value={valueState.category} onChange={onChange} className={style.selectCat}>
        <option value="">Select a category</option>
        {category}
      </select>
    </div>
  );
};

export default FiltersCategories;
