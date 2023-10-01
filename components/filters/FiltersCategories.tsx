"use client";
import { ChangeEvent } from "react";

type FiltersCategoriesProps = {
    valueState: {
      category: string;
    };
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  }

const FiltersCategories: React.FC<FiltersCategoriesProps> = ({ valueState, onChange }) => {
  const category = ["cafeteria", "heladeria", "pizzeria", "restaurante"].map(
    (item) => <option key={item} value={item}>{item}</option>
  );

  return (
    <div>
      <select name="category" value={valueState.category} onChange={onChange}>
        <option value="">Select a category</option>
        {category}
      </select>
    </div>
  );
};

export default FiltersCategories;
