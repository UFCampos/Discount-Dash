import React from 'react'
import style from "./LandingPage.module.css"
import Link from 'next/link'
export const LandingPage = () => {
  return (
    <div className={style.cont}>
        <h1 className='text-4xl'>In progress!</h1>
        <div className={style.linksCont}>
            <Link href={"/home"} className={style.link}>Client</Link>
            <Link href={"/store"} className={style.link}>Store</Link>
        </div>
    </div>
  )

}

export default LandingPage