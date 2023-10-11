"use client";
import { ChangeEvent } from "react";
import style from "./Filters.module.css"
import { useSelector } from "@/lib/redux/hooks";

type FiltersCategoriesProps = {
      valueState: {
        category: string;
      };
      onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    }

const FiltersCategories: React.FC<FiltersCategoriesProps> = ({ valueState, onChange }) => {

  const categories=useSelector((state)=>state.filter.categories)

  const category = categories?.map(
    ({category}, index) => <option key={index} value={category}>{category}</option>
  );

  return (
    <div className={style.catCont}>
      <label htmlFor="category" className={style.catTitle}>Categories</label>
      <select name="category" value={valueState.category} onChange={onChange} className={style.selectCat}>
        <option value="">Select a category</option>
        {
          category
        }
      </select>
    </div>
  );
};

export default FiltersCategories;
