"use client";
import { useGetResultsQuery } from "@/lib/redux/service/productsAPI";
import { useDispatch } from "@/lib/redux/hooks";
import {
  loadProducts,
  loadErrors,
  isLoadingItems,
} from "@/lib/redux/features/itemsSlice";
import React, { useState, useEffect } from "react";
import style from "./searchBar.module.css";
import { setName } from "@/lib/redux/features/filterSlice";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  const { data, isLoading, isError } = useGetResultsQuery({ name: value });

  useEffect(() => {
    if (value === "") {
      dispatch(setName(value));
      dispatch(loadErrors(isError));
      dispatch(isLoadingItems(isLoading));
      dispatch(loadProducts(data));
    }
  }, [value]);

  useEffect(() => {
    dispatch(setName(value));
  }, [value]);

  useEffect(() => {
    dispatch(isLoadingItems(isLoading));
    if (isLoading === false && isError === false) {
      dispatch(loadProducts(data));
    }
  }, [isLoading]);


  const handleSearch=()=>{
    dispatch(setName(value))
    dispatch(loadProducts(data));
  }

  return (
    <div className={style.search}>
      <input type="text" className={style.search__input} placeholder="Type your text" onChange={handleChange}/>
      <button className={style.search__button} onClick={handleSearch}>
          <svg className={style.search__icon} aria-hidden="true" viewBox="0 0 24 24">
              <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
          </svg>
      </button>
    </div>
  );
};

export default SearchBar;
