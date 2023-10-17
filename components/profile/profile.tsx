"use client";
import { useGetProfileQuery } from "@/lib/redux/service/searchProfileAPI";
import { Image } from "@nextui-org/react";
import style from "./profile.module.css";
import { useSelector } from "@/lib/redux/hooks";
import Link from "next/link";
import PhotoModal from "../photoModal/PhotoModal";
import { useState } from "react";

type ProfileProps = {
  id: string;
};

const Profile: React.FC<ProfileProps> = ({ id }) => {
  const { data, isError } = useGetProfileQuery({ id });
  const user = useSelector((state) => state.userProfile);
  const [file, setFile]=useState("")
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        const { value}=event.target
        setFile(value)
    }
  return (
    <main className={style.cont}>
      <section className={style.profile}>
        <div className={style.head}>
          <div className={style.imgCont}>
            <Image src={ !user?.photoUrl ? data?.photoUrl : user.photoUrl ? user.photoUrl:"/default.jpg"} alt='logo discount dash' className={style.img}/>
            <div className={style.editCont}>
                <button className={style.editCircle}><span className="material-symbols-outlined" id={style.edit}>edit</span></button>
            </div>
          </div>
          <h2 className={style.name}>{!user?.name ? data?.name : user?.name}</h2>
        </div>
        <div className={style.separate}></div>
        <div className={style.info}>
          <Link href={`/users/profile/${id}/changeName`} className={style.link}>Change name</Link>
          <Link href={`/users/profile/${id}/updatePassword`} className={style.link}>Change password</Link>
          <Link href={`/users/profile/${id}/myAddress`} className={style.link}>My addresses</Link>
          <Link href={""} className={style.link}>My Orders</Link>
          <Link href={""} className={style.link}>Shop history</Link>
        </div>
      </section>
    </main>
  );
};

export default Profile;
