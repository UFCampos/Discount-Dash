import {locationInfo} from "@/utils/types"

const locationValidations=(data:locationInfo)=>{
    
    const regex=/^[a-zA-Z\s]+$/

    const {street,streetNumber, postalCode, province, city}=data

    let errors={
        emptyStreet:"",
        emptyNumber:"",
        emptyPD:"",
        emptyProvince:"",
        invalidProvince:"",
        emptyCity:"",
        invalidCity:""
    }

    if(street.length===0){
        errors.emptyStreet="add a street"
    }
    if(streetNumber.length===0){
        errors.emptyNumber="add a number of street"
    }
    if(postalCode.length===0){
        errors.emptyPD="add a postal code"
    }
    if(province.length===0){
        errors.emptyProvince="add a Province"
    }
    if(province.length!==0 && !regex.test(province)){
        errors.invalidProvince="only letters are allowed"
    }
    if(city.length===0){
        errors.emptyCity="add a City"
    }
    if(city.length!==0 && !regex.test(city)){
        errors.invalidCity="only letters are allowed"
    }
    return errors
}

export default locationValidations