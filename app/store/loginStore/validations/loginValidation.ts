import { login } from '@/utils/types';

const loginValidation=(data:login)=>{
    const {email, password}=data

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let errors={
        emptyEmail:"",
        invalidEmail:"",
        emptyPassword:"",
        shortPassword:""
    }

    if(email.length===0){
        errors.emptyEmail="empty email field"
    }
    if(!regex.test(email) && email.length!==0){
        errors.invalidEmail="invalid email format"
    }
    if(password.length===0){
        errors.emptyPassword="empty password field"
    }
    if(password.length!==0 && password.length<8){
        errors.shortPassword="the password is short"
    }
    return errors
}

export default loginValidation