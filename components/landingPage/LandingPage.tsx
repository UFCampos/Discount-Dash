import React from 'react'
import style from "./LandingPage.module.css"
import Link from 'next/link'
import Image from 'next/image'
import img from "@/public/logopanda.svg"
export const LandingPage = () => {
  return (
    <div className={style.cont}>
          <div className={style.titleCOnt}>
            <h1 className={style.title}>Welcome to Discount Dash!</h1>
          </div>
          <div className={style.linksCont}>
              <Link href={"/home"} className={style.link}>Client</Link>
              <Link href={"/store"} className={style.link}>Store</Link>
          </div>
        
    </div>
  )

}

export default LandingPage