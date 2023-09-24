"use client";
import { useGetResultsQuery } from "@/lib/redux/service/searchBarAPI";
import { useDispatch } from "@/lib/redux/hooks";
import {
  loadProducts,
  loadErrors,
  isLoadingItems,
} from "@/lib/redux/features/itemsSlice";
import { useState, useEffect } from "react";
import style from "./searchBar.module.css";

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
      dispatch(loadProducts(data));
      dispatch(loadErrors(isError));
    }
  }, [value]);

  useEffect(() => {
    dispatch(isLoadingItems(isLoading));
    if (isLoading === false) {
      dispatch(loadProducts(data));
    }
  }, [isLoading]);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(isLoadingItems(isLoading));
      dispatch(loadProducts(data));
      dispatch(loadErrors(isError));
    }
  };

  return (
    <div>
      <input
        className={style.input}
        type="text"
        placeholder="Search"
        onKeyUp={handleKeyUp}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
