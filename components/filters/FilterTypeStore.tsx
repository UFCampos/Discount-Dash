import { ChangeEvent } from "react";
import style from "./Filters.module.css"

type TypeStoreProps = {
    valueState: {
      storeType: string;
    };
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  }
const FilterTypeStore:React.FC<TypeStoreProps>=({valueState, onChange})=>{
    return(
        <div className={style.catCont}>
            <label className={style.catTitle} htmlFor="storeType">Select a type store</label>
            <select className={style.selectCat} name="storeType" value={valueState.storeType} onChange={onChange}>
                <option value="">Select</option>
                <option value="market">Market</option>
                <option value="restaurant">Restaurant</option>
            </select>
        </div>
    )
}
export default FilterTypeStore