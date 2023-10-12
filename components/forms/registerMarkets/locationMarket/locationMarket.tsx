import React from 'react'
import styles from "../sections.module.css"
import { locationProps } from "@/utils/types"

const LocationMarket: React.FC<locationProps>=({valueState, handleChange, errors})=>{

    const {emptyCity, emptyNumber, emptyPD, emptyProvince, emptyStreet, invalidCity, invalidProvince}=errors
    
    return (
        <div className={styles.cont}>
            <div className={styles.presentation}>
                <h1>Where is your location located?</h1>
                <p>Customers and delivery people will use this information to find your location.</p>
            </div>
            <form className={styles.form}>
                <div className={styles.labelInput}>
                    <label htmlFor='street' className={styles.reference}>Street</label>
                    <input type='text'className={styles.input} name='street' value={valueState.street} onChange={handleChange}/>
                    {emptyStreet && <label htmlFor='street'  className={styles.error}>{emptyStreet}</label>}
                </div>
                <div className={styles.labelInput}>
                    <label htmlFor='streetNumber' className={styles.reference}>Number</label>
                    <input type='number' className={styles.input} name='streetNumber' value={valueState.streetNumber} onChange={handleChange}/>
                    {emptyNumber && <label htmlFor='street'  className={styles.error}>{emptyNumber}</label>}
                </div>
                <div className={styles.labelInput}>
                    <label htmlFor='postalCode' className={styles.reference}>Postal code</label>
                    <input type='text' className={styles.input} name='postalCode' value={valueState.postalCode} onChange={handleChange}/>
                    {emptyPD && <label htmlFor='street'  className={styles.error}>{emptyPD}</label>}
                </div>
                <div className={styles.labelInput}>
                    <label htmlFor='province' className={styles.reference}>Province</label>
                    <input type='text' className={styles.input} name='province' value={valueState.province} onChange={handleChange}/>
                    {emptyProvince && <label htmlFor='street'  className={styles.error}>{emptyProvince}</label>}
                    {invalidProvince && <label htmlFor='street'  className={styles.error}>{invalidProvince}</label>}
                </div>
                <div className={styles.labelInput}>
                    <label htmlFor='city' className={styles.reference}>city</label>
                    <input type='text' className={styles.input} name='city' value={valueState.city} onChange={handleChange}/>
                    {emptyCity && <label htmlFor='street'  className={styles.error}>{emptyCity}</label>}
                    {invalidCity && <label htmlFor='street'  className={styles.error}>{invalidCity}</label>}
                </div>
            </form>
        </div>
    )
}

export default LocationMarket