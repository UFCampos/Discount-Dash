import {marketProps} from "../types/types"
import styles from "../sections.module.css"

const LocalInfo: React.FC<marketProps>=({valueState, handleChange, errors})=>{
    const {emptyName,longName,emptyType, emptyCategory,emptyPhone, longPhone, invalidPhone, shortPhone}=errors
    
    return(
        <div className={styles.cont}>
            <div className={styles.presentation}>
                <h1>Tell us about your business</h1>
                <p>This information will be displayed in your application so that customers can search for you and contact you in case they have a question.</p>
            </div>
            <form className={styles.form}>
                <div className={styles.labelInput}>
                    <label htmlFor="marketName" className={styles.reference}>Market name</label>
                    <input type="text" className={styles.input} name="marketName" onChange={handleChange} value={valueState.marketName}/>
                    {emptyName && <label htmlFor="marketName" className={styles.error}>{emptyName}</label>}
                    {longName && <label htmlFor="marketName" className={styles.error}>{longName}</label>}
                </div>
                <div className={styles.labelSelect}>
                    <label htmlFor="typeMarket" className={styles.reference}>Type of market</label>
                    <select name="typeMarket" className={styles.select} onChange={handleChange} value={valueState.typeMarket}>
                        <option value="">Select a type</option>
                        <option value="market">Market</option>
                        <option value="restaurant">Restaurant</option>
                    </select>
                    {emptyType && <label htmlFor="typeMarket" className={styles.error}>{emptyType}</label>}
                </div>
                <div className={styles.labelSelect}>
                    <label htmlFor="category" className={styles.reference}>Category</label>
                    <select name="category" className={styles.select} onChange={handleChange} value={valueState.category}>
                        <option value="">Select category</option>
                        <option value="store">Store</option>
                        <option value="food">Food</option>
                        <option value="café">café</option>
                    </select>
                    {emptyCategory && <label htmlFor="category" className={styles.error}>{emptyCategory}</label>}
                </div>
                <div className={styles.labelRadio}>
                    <p>It is a place on the street?</p>
                    <div className={styles.radiosCont}>
                        <input type="radio" name="onTheStreet" value="yes" checked={valueState.onTheStreet==="yes"} onChange={handleChange}/>
                        <label htmlFor="yes">yes</label>
                        <input type="radio" name="onTheStreet" value="no" checked={valueState.onTheStreet==="no"} onChange={handleChange}/>
                        <label htmlFor="no">no</label>
                    </div>
                </div>
                <div className={styles.labelInput}>
                    <label htmlFor="phone" className={styles.reference}>Phone</label>
                    <input type="phone" className={styles.input} name="phone" onChange={handleChange} value={valueState.phone}/>
                    {emptyPhone && <label htmlFor="phone" className={styles.error}>{emptyPhone}</label>}
                    {shortPhone && <label htmlFor="phone" className={styles.error}>{shortPhone}</label>}
                    {longPhone && <label htmlFor="phone" className={styles.error}>{longPhone}</label>}
                    {invalidPhone && <label htmlFor="phone" className={styles.error}>{invalidPhone}</label>}
                </div>
            </form>
        </div>
    )
}
export default LocalInfo    