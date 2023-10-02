"use client";
import { useGetResultsQuery } from "@/lib/redux/service/productsAPI";
import { useDispatch, useSelector } from "@/lib/redux/hooks";
import {
  loadProducts,
  loadErrors,
  isLoadingItems,
} from "@/lib/redux/features/itemsSlice";
import { useState, useEffect } from "react";
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
    if(value === ""){
      dispatch(loadErrors(isError));
      dispatch(isLoadingItems(isLoading));
      dispatch(loadProducts(data));
    }

  },[value]);

  useEffect(() => {
    dispatch(isLoadingItems(isLoading));
    if (isLoading === false && isError === false) {
      dispatch(loadProducts(data));
    }
  }, [isLoading]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" ) {
          dispatch(setName(value));
      }
  };

  return (
    <div>
      <input
        className={style.input}
        type="text"
        placeholder="Search"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
