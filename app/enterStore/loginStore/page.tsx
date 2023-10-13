"use client"
import style from "./loginStore.module.css"
import img from "@/public/local.jpeg"
import Image from "next/image"
import Header from "@/components/headerRegisterMarket/headerRegisterMarket"
import { useState, useEffect } from "react"
import loginValidation from "./validations/loginValidation"
import { loginErrorStore, login } from "@/utils/types"
import { ChangeEvent } from "react"
import React from "react"
import LocalInfo from "@/components/forms/registerMarkets/marketInfo/marketInfo"
const LoginStore=()=>{

    const [loginInfo, setLoginInfo]=useState<login>({
        email:"",
        password:""
    })
    const [loginErrorStore, setErrors]=useState<loginErrorStore>({
        emptyEmail:"",
        invalidEmail:"",
        shortPassword:"",
        emptyPassword:""
    })

    const{emptyEmail, emptyPassword, invalidEmail, shortPassword}=loginErrorStore
    
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value}=event.target

        setLoginInfo({
            ...loginInfo,
            [name]:value
        })
        setErrors(loginValidation({
            ...loginInfo,
            [name]:value
        }))
    }
    useEffect(()=>{
        setErrors(loginValidation(loginInfo))
    }, [loginInfo])

    return (
        <main className={style.main}>
            <Header/>
            <div className={style.cont}>
                <section className={style.imgCont}>
                    <Image src={img} alt="login form" className={style.img}/>
                </section>
                <section className={style.formCont}>
                    <h1>log in</h1>
                    <div className={style.loginCard}>
                        <form>
                            <div className={style.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input name="email" id="username" type="email" value={loginInfo.email} onChange={handleChange}/>
                                {emptyEmail && <label htmlFor="email" className={style.error}>{emptyEmail}</label>}
                                {invalidEmail && <label htmlFor="email" className={style.error}>{invalidEmail}</label>}
                            </div>
                            <div className={style.formGroup}>
                                <label htmlFor="password">Password:</label>
                                <input name="password" id="password" type="password" value={loginInfo.password} onChange={handleChange}/>
                                {shortPassword && <label htmlFor="password" className={style.error}>{shortPassword}</label>}
                                {emptyPassword && <label htmlFor="password" className={style.error}>{emptyPassword}</label>}
                            </div>
                            <div className={style.formGroup}>
                                <input value="Login" type="submit"/>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default LoginStore