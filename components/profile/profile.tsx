"use client";
import { useGetProfileQuery } from "@/lib/redux/service/searchProfileAPI";
import { Image } from "@nextui-org/react";
import style from "./profile.module.css";
import { useSelector } from "@/lib/redux/hooks";
import Link from "next/link";
import PhotoModal from "../photoModal/PhotoModal";
import { useState } from "react";
import { updateAddress } from '../../app/api/users/updateUser/updateUser';

type ProfileProps = {
  id: string;
};

const Profile: React.FC<ProfileProps> = ({ id }) => {
  const { data, isError } = useGetProfileQuery({ id });
  const user = useSelector((state) => state.userProfile);

  console.log(user)
  const [updateFile, setFile]=useState("")

  const [update, setUpdate]=useState(false)

    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
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
    <main className={style.cont}>
      <section className={style.profile}>
        <div className={style.head}>
          <div className={style.imgCont}>
            <Image src={ data?.image ? data?.image : user?.photoUrl} alt='img' className={style.img}/>
            <div className={style.editCont}>
                <button className={style.editCircle} onClick={handleUpdate}><span className="material-symbols-outlined" id={style.edit}>edit</span></button>
            </div>
          </div>
          <h2 className={style.name}>{!data?.name ? user?.name : data?.name}</h2>
        </div>
        <div className={style.separate}></div>
        <div className={style.info}>
          <Link href={`/users/profile/${id}/changeName`} className={style.link}>Change name</Link>
          <Link href={`/users/profile/${id}/updatePassword`} className={style.link}>Change password</Link>
          <Link href={`/users/profile/${id}/myAddress`} className={style.link}>My addresses</Link>
          <Link href={`/orders`} className={style.link}>My Orders</Link>
          <Link href={`/users/profile/${id}/shopHistory`} className={style.link}>Shop history</Link>
          <Link href={`/users/profile/${id}/favorites`} className={style.link}>My wishlist</Link>
        </div>
      </section>
      
      {
        update && <PhotoModal onChange={handleChange} update={updateFile} close={handleClose} id={id}/>
        
      }

    </main>
  );
};

export default Profile;
