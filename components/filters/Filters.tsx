"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { useFiltersQueryQuery } from "@/lib/redux/service/filtersAPI";
import FiltersPrice from "./FiltersPrice";
import FiltersSort from "./FilterSort";
import FiltersCategories from "./FiltersCategories";
import { loadProducts, loadErrors } from "@/lib/redux/features/itemsSlice";
import { useDispatch, useSelector } from "@/lib/redux/hooks";
import style from "./Filters.module.css";
import FilterTypeStore from "./FilterTypeStore";
type FiltersState = {
  category: string;
  name: string;
  minPrice: string;
  maxPrice: string;
  order: string;
  storeType: string;
};

const Filters = () => {
  const nameSearch = useSelector((state) => state.filter.name);

  const [valueState, setValueState] = useState<FiltersState>({
    category: "",
    order: "",
    name: "",
    minPrice: "",
    maxPrice: "",
    storeType: "",
  });

  useEffect(() => {
    setValueState({
      ...valueState,
      name: nameSearch,
    });
  }, [nameSearch]);

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
    minPrice: valueState.minPrice === "" ? "0" : valueState.minPrice,
    maxPrice: valueState.maxPrice === "" ? "10000000" : valueState.maxPrice,
    order: valueState.order,
    name: valueState.name,
    storeType: valueState.storeType,
  });

  useEffect(() => {}, [valueState]);

  const handleFilters = () => {
    dispatch(loadProducts(data));
    dispatch(loadErrors(isError));
  };

  return (
    <div className={style.filterCont}>
      <FiltersCategories valueState={valueState} onChange={onChange} />
      <FiltersPrice valueState={valueState} onChange={onChange} />
      <FiltersSort valueState={valueState} onChange={onChange} />
      <FilterTypeStore valueState={valueState} onChange={onChange} />
      <button onClick={handleFilters} className={style.apply}>
        Apply
      </button>
    </div>
  );
};

export default Filters;
