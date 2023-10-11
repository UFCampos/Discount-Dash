import { factureInfo } from '../types/types';

const factureValidations=(data:factureInfo)=>{

    const regex=/^[a-zA-Z\s]+$/

    const {typePerson, cuit_cuil, ownerName, IVA_condition, facture_type, dni, date, nationality,}=data

    let errors={
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
    }

    if(typePerson.length===0){
        errors.emptyTypePerson="Select a type person"
    }
    if(cuit_cuil.length===0){
        errors.emptyCUIT="add a Cuit/Cuil"
    }
    if(ownerName.length===0){
        errors.emptyName="add a name and surname of owner"
    }
    if(ownerName.length!==0 && !regex.test(ownerName)){
        errors.invalidName="only letters are allowed"
    }
    if(IVA_condition.length===0){
        errors.emptyIVA="select an IVA condition"
    }
    if(facture_type.length===0){
        errors.emptyInvoice="select an type of invoice"
    }
    if(dni.length===0){
        errors.emptyDocument="add the owner's document number"
    }
    if(date.length===0){
        errors.emptyBirth="Add the owner's date of birth"
    }
    if(nationality.length===0){
        errors.emptyNationality="add the nationality of the owner"
    }
    if(nationality.length!==0 && !regex.test(nationality)){
        errors.invalidNationality="only letters are allowed"
    }

    return errors
}

export default factureValidations