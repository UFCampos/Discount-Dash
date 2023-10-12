import Link from "next/link"
import Image from "next/image"
import log from "@/public/key.png"
import reg from "@/public/register.png"
import style from "./enterStore.module.css"

const enterStore=()=>{
    return (
        <main className={style.main}>
            <h1>you have a market or a restaurant?</h1>
            <div className={style.section}>
                <div className={style.redirect}>
                    <Image src={log} alt="login" className={style.img}/>
                    <Link href={"/enterStore/loginStore"} className={style.link}>Log in</Link>
                </div>
                <div className={style.redirect}>
                    <Image src={reg} alt="register" className={style.img}/>
                    <Link href={"/enterStore/registerStore"} className={style.link}>Register</Link>
                </div>
            </div>
        </main>
    )
}

export default enterStore