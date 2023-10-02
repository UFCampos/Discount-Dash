"use client";
// import { useDispatch, useSelector } from "@/lib/redux/hooks";
import { useState, ChangeEvent, useEffect } from "react";
import { useFiltersQueryQuery } from "@/lib/redux/service/filtersAPI";
import FiltersPrice from "./FiltersPrice";
import FiltersSort from "./FilterSort";
import FiltersCategories from "./FiltersCategories";
import { loadProducts, loadErrors } from "@/lib/redux/features/itemsSlice";
import { useDispatch } from "@/lib/redux/hooks";

type FiltersState = {
  category: string;
  sort: string;
  name: string;
  minPrice: string;
  maxPrice: string;
};

const Filters = () => {
  const [valueState, setValueState] = useState<FiltersState>({
    category: "",
    sort: "",
    name: "",
    minPrice: '',
    maxPrice: '',
  });
  console.log(valueState);

  const dispatch = useDispatch();

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValueState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { data, isError } = useFiltersQueryQuery({
    category: valueState.category,
    minPrice: valueState.minPrice === '' ? "0" : valueState.minPrice,
    maxPrice: valueState.maxPrice === '' ? "10000000" : valueState.maxPrice,
    sort: valueState.sort,
    name: valueState.sort,
  });

  useEffect(() => {

  }, [valueState]);

  const handleFilters = () => {
    
    dispatch(loadProducts(data));
    dispatch(loadErrors(isError));
  };

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     dispatch(loadProducts(data));
  //     dispatch(loadErrors(isError));
  //   }
  // };

  console.log(data);

  return (
    <div>
      <h1>Filters</h1>
      <FiltersCategories valueState={valueState} onChange={onChange} />
      <FiltersPrice valueState={valueState} onChange={onChange} />
      <FiltersSort valueState={valueState} onChange={onChange} />
      <button onClick={handleFilters}>Apply filter</button>
    </div>
  );
};

export default Filters;
