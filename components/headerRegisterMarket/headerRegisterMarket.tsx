"use client"
import Link from "next/link"
import style from "./header.module.css"
import Image from "next/image"
import logo from "@/public/logopanda.svg"
import { usePathname } from "next/navigation"

const Header=()=>{
    const pathname=usePathname()
    return(
        <header className={style.headerCont}>
            <div className={style.logoCont}>
                <Image src={logo} alt="logo" className={style.img}/>
            </div>
            {
                pathname==="/enterStore/registerStore"
                &&
                <div className={style.nav}>
                    <p>Is your market registered?</p>
                    <Link href="/enterStore/loginStore" className={style.redirectButton}>Sing in</Link>
                </div>
            }
            {
                pathname==="/enterStore/loginStore"
                &&
                <div className={style.nav}>
                    <p>Your business is not registered?</p>
                    <Link href="/enterStore/registerStore" className={style.redirectButton}>Sing up</Link>
                </div>
            }
        </header>
    )
}

export default Header