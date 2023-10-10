"use client"
import React, { useState } from 'react'
import style from "./RegisterMarkets.module.css"
import LocationMarket from './locationMarket/locationMarket'
import LocalInfo from './localInfo/LocalInfo';
import FactureInfo from './factureInfo/FactureInfo';
import LoginInfo from './loginInfo/LoginInfo';

interface marketInfo {
  marketName:string,
  typeMarket:string,
  category:string,
  onTheStreet:string,
  phone:string,
}

interface locationInfo{
  street:string,
  streetNumber:string,
  postalCode:string,
  province:string,
  city:string,
}

interface factureInfo{
  typePerson:string,
  cuit_cuil:string,
  ownerName:string,
  IVA_condition:string,
  facture_type:string,
  dni:string,
  date:string,
  nationality:string,
}
interface loginInfo{
  email:string,
  password:string,
  confirmPassword:string
}
export const RegisterMarketsForm = () => {

  const [marketInfo, setMarketInfo]=useState<marketInfo>({
    marketName:"",
    typeMarket:"",
    category:"",
    onTheStreet:"yes",
    phone:"",
  })
  const [locationInfo, setLocationInfo]=useState<locationInfo>({
    street:"",
    streetNumber:"",
    postalCode:"",
    province:"",
    city:"",
  })
  const [factureInfo, setFactureInfo]=useState<factureInfo>({
    typePerson:"",
    cuit_cuil:"",
    ownerName:"",
    IVA_condition:"",
    facture_type:"",
    dni:"",
    date:"",
    nationality:"",
  })

  const [loginInfo, setLoginInfo]=useState<loginInfo>({
    email:"",
    password:"",
    confirmPassword:""
  })

  const [section, setSection]=useState(1)

  const handleSection=(buttonValue:string)=>{
    if(buttonValue==="continue" && section<4){
      setSection(section + 1)
    }
    if(buttonValue==="back" && section>1){
      setSection(section - 1)
    }
  }

  const handleChange=(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const {name, value}=event.target
    setMarketInfo({
      ...marketInfo,
      [name]:value
    })
  }
  const handleChangeLocation=(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const {name, value}=event.target
    setLocationInfo({
      ...locationInfo,
      [name]:value
    })
  }
  const handleChangeFacture=(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const {name, value}=event.target
    setFactureInfo({
      ...factureInfo,
      [name]:value
    })
  }

  const handleChangeLogin=(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const {name, value}=event.target
    setLoginInfo({
      ...loginInfo,
      [name]:value
    })
  }
  return (
    <section className={style.contForm}>
      <div className={style.infoCont}>
        {
          section===1 ?  <LocalInfo valueState={marketInfo} handleChange={handleChange}/>  :
          section===2 ?  <LocationMarket valueState={locationInfo} handleChange={handleChangeLocation}/> :
          section===3 ?<FactureInfo valueState={factureInfo} handleChange={handleChangeFacture}/>
          : <LoginInfo valueState={loginInfo} handleChange={handleChangeLogin}/>
        }
      </div>
      <div className={style.buttons}>
        <button onClick={()=>handleSection("back")}>back</button>
        <p>{section}/4</p>
        <button onClick={()=>handleSection("continue")}>continue</button>
      </div>
    </section>
  )
}

export default RegisterMarketsForm