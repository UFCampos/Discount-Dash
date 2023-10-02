"use client";
// import { useDispatch, useSelector } from "@/lib/redux/hooks";
import { useState, ChangeEvent } from "react";
import { useFiltersQueryQuery } from "@/lib/redux/service/filtersAPI";
import FiltersPrice from "./FiltersPrice";
import FiltersSort from "./FilterSort";
import FiltersCategories from "./FiltersCategories";

type FiltersState = {
    category: string;
    sort: string;
    name: string;
    minPrice: number;
    maxPrice: number;
  }

const Filters = () => {
  const [valueState, setValueState] = useState<FiltersState>({
    category: "",
    sort: "",
    name: "",
    minPrice: 0,
    maxPrice: 0
  });

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValueState((prevState) => ({
        ...prevState,
        [name] : value
      })
    )
    };
    

  const { data } = useFiltersQueryQuery({
    category: valueState.category,
    minPrice: valueState.minPrice,
    maxPrice: valueState.maxPrice,
    sort: valueState.sort,
    name: valueState.sort,
  });

  return (
    <div>
      <h1>Filters</h1>
      <FiltersCategories valueState={valueState} onChange={onChange}/>
      <FiltersPrice valueState={valueState} onChange={onChange}/>
      <FiltersSort valueState={valueState} onChange={onChange}/>
    </div>
  );
};

export default Filters;
