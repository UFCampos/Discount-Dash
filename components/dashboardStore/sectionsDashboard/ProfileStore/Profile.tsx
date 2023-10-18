import React from 'react'
import style from "./Profile.module.css"
import Image from "next/image"
import Link from 'next/link'
import img from "@/public/logopanda.svg"
import { useState } from 'react'
import PhotoModal from '@/components/photoModal/PhotoModal'

export const Profile = ({id}:{id:string}) => {
  console.log("este id recibe profile", id)

  const [update, setUpdate]=useState(false)
  
  const [updateFile, setFile] = useState<File | string>("");


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.files && event.target.files.length > 0) {
    setFile(event.target.files[0]);
  }
}

  const handleUpdate=()=>{
    setUpdate(true)
  }
  const handleClose=()=>{
    setUpdate(false)
  }
  
  return (

    <>
      <div className={style.profileCont}>
        <div className={style.imgCont}>
          <Image src={img} alt='logo discount dash' className={style.img}/>
          <div className={style.editCont}>
              <button className={style.editCircle} onClick={handleUpdate}><span className="material-symbols-outlined" id={style.edit}>edit</span></button>
          </div>
        </div>
        <h1 className={style.marketName}>market name</h1>
        <p className={style.email}>Email</p>
        <Link href={`/users/profile/${id}/updatePassword`} className={style.changePass}>
          Change passworld
        </Link>
      </div>
      {
        update && <PhotoModal onChange={handleChange} update={updateFile} close={handleClose} id={id}/>
      }
    </>
  )
}

export default Profile