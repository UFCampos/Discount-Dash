"use client";
import { useChangeNameMutation } from "@/lib/redux/service/changeNameAPI";
import { useSelector } from "@/lib/redux/hooks";
import { useState } from "react";

const ChangeNameUser = () => {
  const [name, setName] = useState("");
  const { id } = useSelector((state) => state.userProfile);
  const [mutate] = useChangeNameMutation();



  const sendNewName = () => {
    mutate({
      userId: id,
      name,
    });
  };
  return(
    <div>
        <h1>Change name</h1>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <button onClick={sendNewName}>Change name</button>
    </div>
  )
};

export default ChangeNameUser;
