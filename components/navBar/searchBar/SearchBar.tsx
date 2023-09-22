'use client';
import { useGetResultsQuery } from "@/lib/redux/service/searchBarAPI";
import { useDispatch } from "@/lib/redux/hooks";
import { loadProducts, loadErrors, isLoadingItems} from "@/lib/redux/features/itemsSlice";
import { useState, useEffect } from "react";
import style from "./searchBar.module.css"

const SearchBar = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);
    }

    const { data, isLoading, isError } = useGetResultsQuery({ name: value });

    useEffect(() => {
        dispatch(loadProducts(data));
    }, [data])
    useEffect(() => {
        dispatch(loadProducts([]));
        dispatch(loadErrors(isError));
    }, [isError])
    useEffect(() => {
        dispatch(isLoadingItems(isLoading));
    }, [isLoading])

    return (
        <div>
            <input className={style.input} type="text" placeholder="Search" onChange={handleChange} />
        </div >
    )
}

export default SearchBar