"use client";
import { ChangeEvent } from "react";

type FiltersPriceProps = {
    valueState: {
        minPrice: number; //revisar que funcione bien asi o si va con str
        maxPrice: number;
    };
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FiltersPrice: React.FC<FiltersPriceProps> = ({valueState, onChange}) => {
  return (
    <div>
      <h1>Price</h1>

      <div>
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          value={valueState.minPrice}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          value={valueState.maxPrice}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FiltersPrice;