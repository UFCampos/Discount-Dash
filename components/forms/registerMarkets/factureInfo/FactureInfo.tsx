import React from "react"
import {factureProps} from "@/utils/types"
import styles from "../sections.module.css"

const FactureInfo:React.FC<factureProps>=({valueState, handleChange, errors})=>{
    
    const {emptyTypePerson, emptyCUIT, emptyName, invalidName, emptyIVA, emptyInvoice, emptyDocument, emptyBirth, emptyNationality, invalidNationality}=errors
    
    return (
        <div className={styles.contScroll}>
            <div className={styles.presentation}>
                <h1>Billing information</h1>
                <p>This information will appear on sales invoices.</p>
            </div>
            <form className={styles.form}>
                <div className={styles.labelSelect}>
                    <label htmlFor="typePerson" className={styles.reference}>Type of person</label>
                    <select value={valueState.typePerson}  className={styles.select} name="typePerson" onChange={handleChange}>
                        <option value="">Select an option</option>
                        <option value="Physical person">Physical person</option>
                        <option value="legal person">legal person</option>
                    </select>
                    {emptyTypePerson && <label htmlFor='street'  className={styles.error}>{emptyTypePerson}</label>}
                </div>
                <div className={styles.labelInput}>
                    <label htmlFor="cuit_cuil" className={styles.reference}>CUIT / CUIL</label>
                    <input type="text"className={styles.input} name="cuit_cuil" value={valueState.cuit_cuil} onChange={handleChange}/>
                    {emptyCUIT && <label htmlFor='street'  className={styles.error}>{emptyCUIT}</label>}
                </div>
                <div className={styles.labelInput}>
                    <label htmlFor="ownerName" className={styles.reference}>Name and Surname</label>
                    <input type="text"className={styles.input} name="ownerName" value={valueState.ownerName} onChange={handleChange}/>
                    {emptyName && <label htmlFor='street'  className={styles.error}>{emptyName}</label>}
                    {invalidName && <label htmlFor='street'  className={styles.error}>{invalidName}</label>}
                </div>
                <div className={styles.labelSelect}>
                    <label htmlFor="IVA_condition" className={styles.reference}>IVA condition</label>
                    <select name="IVA_condition" className={styles.select} value={valueState.IVA_condition} onChange={handleChange}>
                        <option value="">select an option</option>
                        <option value="simplified-monotax regime">simplified-monotax regime</option>
                        <option value="registered responsible">registered responsible</option>
                        <option value="exempt">exempt</option>
                        <option value="final consumer">final consumer</option>
                    </select>
                    {emptyIVA && <label htmlFor='street'  className={styles.error}>{emptyIVA}</label>}
                </div>
                <div className={styles.labelSelect}>
                    <label htmlFor="facture_type" className={styles.reference}>invoice type</label>
                    <select name="facture_type"  className={styles.select} value={valueState.facture_type} onChange={handleChange}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="E">E</option>
                        <option value="T">T</option>
                        <option value="M">M</option>
                    </select>
                    {emptyInvoice && <label htmlFor='street'  className={styles.error}>{emptyInvoice}</label>}
                </div>
                <div className={styles.labelInput}>
                    <label htmlFor="dni" className={styles.reference}>Document number</label>
                    <input type="text"className={styles.input} name="dni" value={valueState.dni} onChange={handleChange}/>
                    {emptyDocument && <label htmlFor='street'  className={styles.error}>{emptyDocument}</label>}
                </div>
                <div className={styles.labelInput}>
                    <label htmlFor="date" className={styles.reference}>Birthdate</label>
                    <input type="date"className={styles.input} name="date" value={valueState.date} onChange={handleChange}/>
                    {emptyBirth && <label htmlFor='street'  className={styles.error}>{emptyBirth}</label>}
                </div>
                <div className={styles.labelInput}>
                    <label htmlFor="nationality" className={styles.reference}>Nationality</label>
                    <input type="text"className={styles.input} name="nationality" value={valueState.nationality} onChange={handleChange}/>
                    {emptyNationality && <label htmlFor='street'  className={styles.error}>{emptyNationality}</label>}
                    {invalidNationality && <label htmlFor='street'  className={styles.error}>{invalidNationality}</label>}
                </div>
            </form>
        </div>
    )
}

export default FactureInfo