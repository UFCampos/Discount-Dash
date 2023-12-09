import {marketInfo} from "@/utils/types"

const marketInfoValidation=(data:marketInfo)=>{

    const regex=/^[0-9]+$/

    const {marketName, typeMarket, category, phone}=data

    let errors={
        emptyName:"",
        longName:"",
        emptyType:"",
        emptyCategory:"",
        emptyPhone:"",
        invalidPhone:"",
        longPhone:"",
        shortPhone:""
    }

    if(marketName.length===0){
        errors.emptyName="put a name"
    }
    if(marketName.length>20){
        errors.emptyName="very long name"
    }
    if(!typeMarket){
        errors.emptyType="select your type of business"
    }
    if(!category){
        errors.emptyCategory="Select a category"
    }
    if(phone.length===0){
        errors.emptyPhone="empty phone field"
    }
    if(phone.length!==0 && !regex.test(phone)){
        errors.invalidPhone="The field can only contain numbers"
    }
    if(phone.length!==0 && phone.length<10 && regex.test(phone)){
        errors.shortPhone="the given phone is very short"
    }
    if(phone.length>15 && regex.test(phone)){
        errors.longPhone="very long phone"
    }
    return errors
}
export default marketInfoValidation