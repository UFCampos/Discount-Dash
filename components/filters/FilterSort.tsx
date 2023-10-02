"use client";
import { ChangeEvent } from "react";

type FiltersSortProps = {
  valueState: {
    sort: string;
  };
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const FiltersSort: React.FC<FiltersSortProps> = ({ valueState, onChange }) => {
  return (
    <div>
      <h1>FiltersSort</h1>
      <div>
        <label htmlFor="sort">Sort By:</label>
        <select name="sort" value={valueState.sort} onChange={onChange}>
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
