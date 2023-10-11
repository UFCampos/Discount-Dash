import Link from "next/link"
import style from "./header.module.css"
import Image from "next/image"
import logo from "@/public/logopanda.svg"
const Header=()=>{
    return(
        <header className={style.headerCont}>
            <div className={style.logoCont}>
                <Image src={logo} alt="logo" className={style.img}/>
            </div>
            <div className={style.nav}>
                <p>Is your market registered?</p>
                <Link href="" className={style.redirectButton}>Sing in</Link>
            </div>
        </header>
    )
}

export default Header