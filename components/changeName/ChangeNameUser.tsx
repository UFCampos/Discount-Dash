"use client";
import { useChangeNameMutation } from "@/lib/redux/service/changeNameAPI";
import { useSelector } from "@/lib/redux/hooks";
import { useState } from "react";
import style from "./ChangeName.module.css"

const ChangeNameUser = () => {
  const [name, setName] = useState("");
  const { id } = useSelector((state) => state.userProfile);
  const [mutate] = useChangeNameMutation();



  const sendNewName = () => {
    console.log(id, name)
    mutate({
      userId:id,
      name:name,
    });
  };
  return(
    <div className={style.cont}>
      <div className={style.card}>
        <span className={style.cardTitle}>change your name</span>
        <p className={style.cardContent}>
        </p>
        <div className={style.cardForm}>
            <input placeholder="Your name" type="text" onChange={(e) => setName(e.target.value)}/>
            <button className={style.changeButton} onClick={sendNewName}>Change name</button>
        </div>
      </div>
    </div>
  )
};

export default ChangeNameUser;
