import React from "react"
import styles from "../sections.module.css"
import {loginProps} from "@/utils/types"

const LoginInfo:React.FC<loginProps>=({valueState, handleChange, errors})=>{

    const {emptyEmail, invalidEmail, shortPassword, diferentPassword}=errors

    return (
        <div className={styles.cont}>
            <div className={styles.presentation}>
                <h1>Create account</h1>
                <p>With this information you will access your account</p>
            </div>
            <form className={styles.form}>
                <div className={styles.labelInput}>
                    <label htmlFor="email" className={styles.reference}>Email</label>
                    <input type="text" className={styles.input} name="email" value={valueState.email} onChange={handleChange}/>
                    {emptyEmail && <label htmlFor='street'  className={styles.error}>{emptyEmail}</label>}
                    {invalidEmail && <label htmlFor='street'  className={styles.error}>{invalidEmail}</label>}
                </div>
                <div className={styles.labelInput}>
                    <label htmlFor="password" className={styles.reference}>Password</label>
                    <input type="password" className={styles.input} name="password" value={valueState.password} onChange={handleChange}/>
                    {shortPassword && <label htmlFor='street'  className={styles.error}>{shortPassword}</label>}
                </div>
                <div className={styles.labelInput}>
                    <label htmlFor="confirmPassword" className={styles.reference}>Confirm password</label>
                    <input type="password" className={styles.input} name="confirmPassword" onChange={handleChange} value={valueState.confirmPassword}/>
                    {diferentPassword && <label htmlFor='street'  className={styles.error}>{diferentPassword}</label>}
                </div>
            </form>
        </div>
    )
}
export default LoginInfo