import React from 'react'
import style from "./Profile.module.css"
import Image from "next/image"
import Link from 'next/link'
import img from "@/public/logopanda.svg"
export const Profile = ({id}:{id:string}) => {
  console.log("este id recibe profile", id)
  return (
    <div className={style.profileCont}>
      <div className={style.imgCont}>
        <Image src={img} alt='logo discount dash' className={style.img}/>
        <div className={style.editCont}>
            <button className={style.editCircle}><span className="material-symbols-outlined" id={style.edit}>edit</span></button>
        </div>
      </div>
      <h1 className={style.marketName}>market name</h1>
      <p className={style.email}>Email</p>
      <Link href={`/users/profile/${id}/updatePassword`} className={style.changePass}>
        Change passworld
      </Link>
    </div>
  )
}

export default Profile