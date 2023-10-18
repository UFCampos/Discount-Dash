"use client";
import { useGetAddressesMutation } from "@/lib/redux/service/addressesAPI";
import { useSelector } from "@/lib/redux/hooks";
import { useState } from "react";
import { useGetUserQuery } from "@/lib/redux/service/usersRegisterAPI";
import style from "./addresses.module.css"

const Addresses = () => {
  const [address, setAddress] = useState({
    address: "",
    nameAddress: "",
  });
  const [mutate] = useGetAddressesMutation();
  const { id } = useSelector((state) => state.userProfile);
  console.log(id);

  const { data, isError } = useGetUserQuery({ id });

  const changeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddress = () => {
    mutate({
      userId: id,
      address: address.address,
      nameAddress: address.nameAddress,
    });
  };

  console.log(data);
  

  return (
    <main className={style.cont}>
      <div className={style.createCont}>

        <form className={style.form}>
          <p className={style.formTitle}>add your Address</p>
            <div className={style.inputContainer}>
              <input type="text" placeholder="Enter your address" id="address" name="address" onChange={changeAddress} className={style.input}/>
          </div>
          <div className={style.inputContainer}>
              <input type="text" placeholder="add name to address" id="nameAddress" name="nameAddress" onChange={changeAddress} className={style.input}/>
            </div>
            <button onClick={handleAddress} className={style.submit}>
            add
          </button>
      </form>

      </div>
      <div className={style.locations}>
        <div className={style.titleCont}>
          <h1>Your Locations</h1>
        </div>
        <section className={style.address}>
          {
            data?.addresses.map((item:any)=>{
              return(
                <div key={item.id} className={style.addressItem}>
                  <p>{item.nameAddress}: <span className={style.span}>{item.address}</span></p>
                </div>
              )
            })
          }
        </section>
      </div>
    </main>
  );
};

export default Addresses;
