import { loginInfo } from "../types/types";

const LoginValidations=(data:loginInfo)=>{
    const regex=/@.*\.com/

    const {email, password, confirmPassword}=data

    let errors={
        emptyEmail:"",
        invalidEmail:"",
        shortPassword:"",
        diferentPassword:""
    }

    if(email.length===0){
        errors.emptyEmail="add a email"
    }
    if(email.length!==0 && !regex.test(email)){
        errors.invalidEmail="invalid email format"
    }
    if(password.length<8){
        errors.shortPassword="must be at least 8 characters"
    }
    if(password!==confirmPassword){
        errors.diferentPassword="passwords do not match"
    }
    return errors
}

export default LoginValidations