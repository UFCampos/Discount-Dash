"use client"
import React, { useEffect, useState } from 'react'
import style from "./RegisterMarkets.module.css"
import LocationMarket from './locationMarket/locationMarket'
import MarketInfo from './marketInfo/marketInfo';
import FactureInfo from './factureInfo/FactureInfo';
import LoginInfo from './loginInfo/LoginInfo';
import marketValidation from "./validations/marketInfoValidations"
import locationValidations from './validations/locationValidation';
import factureValidations from './validations/factureValidations';
import LoginValidations from './validations/loginValidations';
import { allDataMarket, marketInfo, locationInfo, factureInfo, loginInfo, marketErrors, locationErrors, factureErrors, loginError } from "@/utils/types"
import { usePostMarketMutation } from '@/lib/redux/service/usersRegisterAPI';

export const RegisterMarketsForm = () => {

  const [mutate] =usePostMarketMutation()

  //!ALL DATA
  const [dataMarket, setDataMarket]=useState<allDataMarket>({
    marketName:"",
    typeMarket:"",
    category:"",
    onTheStreet:"yes",
    phone:"",
    street:"",
    streetNumber:"",
    postalCode:"",
    province:"",
    city:"",
    typePerson:"",
    cuit_cuil:"",
    ownerName:"",
    IVA_condition:"",
    facture_type:"",
    dni:"",
    date:"",
    nationality:"",
    email:"",
    password:"",
  })

  //!INFO STATES
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

  //!ERROR STATES
  
  const [errorsMarket, setErrorsMarket]=useState<marketErrors>({
    emptyName:"",
    longName:"",
    emptyType:"",
    emptyCategory:"",
    emptyPhone:"",
    longPhone:"",
    invalidPhone:"",
    shortPhone:""
  })

  const [locationError, setLocationError]=useState<locationErrors>({
    emptyStreet:"",
    emptyNumber:"",
    emptyPD:"",
    emptyProvince:"",
    invalidProvince:"",
    emptyCity:"",
    invalidCity:""
  })

  const [factureError, setFactureError]=useState<factureErrors>({
    emptyTypePerson:"",
    emptyCUIT:"",
    emptyName:"",
    invalidName:"",
    emptyIVA:"",
    emptyInvoice:"",
    emptyDocument:"",
    emptyBirth:"",
    emptyNationality:"",
    invalidNationality:""
  })

  const [loginError, setLoginError]=useState<loginError>({
    emptyEmail:"",
    invalidEmail:"",
    shortPassword:"",
    diferentPassword:""
  })

  //!CHANGE SECTIONS STATE
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
    setErrorsMarket(marketValidation({
      ...marketInfo,
      [name]:value
    }))
    setDataMarket({
      ...dataMarket,
      [name]:value
    })
  }

  const handleChangeLocation=(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const {name, value}=event.target
    setLocationInfo({
      ...locationInfo,
      [name]:value
    })
    setLocationError(locationValidations({
      ...locationInfo,
      [name]:value
    }))
    setDataMarket({
      ...dataMarket,
      [name]:value
    })
  }
  const handleChangeFacture=(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const {name, value}=event.target
    setFactureInfo({
      ...factureInfo,
      [name]:value
    })
    setFactureError(factureValidations({
      ...factureInfo,
      [name]:value
    }))
    setDataMarket({
      ...dataMarket,
      [name]:value
    })
  }

  const handleChangeLogin=(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const {name, value}=event.target

    setLoginInfo({
      ...loginInfo,
      [name]:value
    })
    setLoginError(LoginValidations({
      ...loginInfo,
      [name]:value
    }))
    if(name!=="confirmPassword"){
      setDataMarket({
        ...dataMarket,
        [name]:value
      })
    }
    
  }

  const handleSubmit=(data:allDataMarket)=>{

    mutate(data)
    
  }

  const disabledButton=()=>{
    if(section===1){
      const validateSection = Object.values(errorsMarket)?.some(value => value !== '');
      return validateSection
    }
    if(section===2){
      const validateLocation=Object.values(locationError).some(value => value !== '');
      return validateLocation
    }
    if(section===3){
      const validateFacture=Object.values(factureError).some(value => value !== '');
      return validateFacture
    }
    if(section===4){
      const validateLogin=Object.values(loginError).some(value => value !== '');
      return validateLogin
    }
  }

  useEffect(()=>{
    setErrorsMarket(marketValidation(marketInfo))
    setLocationError(locationValidations(locationInfo))
    setFactureError(factureValidations(factureInfo))
    setLoginError(LoginValidations(loginInfo))
  }, [marketInfo, locationInfo, factureInfo, loginInfo])

  return (
    <section className={style.contForm}>
      <div className={style.infoCont}>
        {section===1 && <MarketInfo valueState={marketInfo} handleChange={handleChange} errors={errorsMarket}/>}
        {section===2 && <LocationMarket valueState={locationInfo} handleChange={handleChangeLocation} errors={locationError}/>}
        {section===3 && <FactureInfo valueState={factureInfo} handleChange={handleChangeFacture} errors={factureError}/>}
        {section===4 && <LoginInfo valueState={loginInfo} handleChange={handleChangeLogin} errors={loginError}/>}
      </div>
      <div className={style.buttons}>
        <button disabled={section===1 ? true : false} onClick={()=>handleSection("back")} className={style.back}>back</button>
        <p>{section} pasos de 4</p>

        {section!==4 && <button disabled={disabledButton()} className={style.continueButton} onClick={()=>handleSection("continue")}>Continue</button>}
        {section===4 && <button disabled={disabledButton()} className={style.registerButton} onClick={()=>handleSubmit(dataMarket)}>Register</button>}
      
      </div>
    </section>
  )
}

export default RegisterMarketsForm