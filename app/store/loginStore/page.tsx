"use client"
import style from "./loginStore.module.css"
import img from "@/public/local.jpeg"
import Image from "next/image"
import Header from "@/components/headerRegisterMarket/headerRegisterMarket"
import { useState, useEffect } from "react"
import loginValidation from "./validations/loginValidation"
import { loginErrorStore, login } from "@/utils/types"
import React from "react"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase/config"
import { useDispatch } from "@/lib/redux/hooks"
import { setUser } from "@/lib/redux/features/userProfile"
import { useRouter } from "next/navigation"

const LoginStore=()=>{

    const router=useRouter()

    const dispatch=useDispatch()
     
    const [loginInfo, setLoginInfo]=useState<login>({
        email:"",
        password:""
    })

    const [uid, setUid] = useState("");

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

    const handleSubmit=async (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        await signInWithEmailAndPassword(auth, loginInfo.email, loginInfo.password)
        .then(userCredential=>{
            const {user}=userCredential
            const {uid}=user
            setUid(uid)
            const mappedUser = {
                id: uid,
                email: user.email,
                photoUrl: user.photoURL,
                name: user.displayName,
            }
            dispatch(setUser(mappedUser));
            router.push(`/store/${uid}`)
		})
		.catch(error => {
			console.error(error);
		})
    }
    useEffect(()=>{
        setErrors(loginValidation(loginInfo))
        onAuthStateChanged(auth, (user)=>{
            if(user){
                let mappedUser = {};
                user.providerData.forEach((profile) => {
                    mappedUser = {
                        id: uid ? uid : profile.uid, // Usar el uid del estado
                        email: profile.email,
                        photoUrl: profile.photoURL,
                        name: profile.displayName,
                    };
                });
                dispatch(setUser(mappedUser));
            }
        })
    }, [loginInfo, uid, dispatch])

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
                        <form onSubmit={handleSubmit}>
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