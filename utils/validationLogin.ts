import { LoginInput } from "./types";
  
  const validationLogin = (input: LoginInput) => {
    
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let errors: Partial<LoginInput> = {};
  

    if (!input.email) {
        errors.email = "Email is necessary";
      } else if (!emailRegex.test(input.email)) {
      errors.email= "Email not valid"
    } else {
        errors.email= ""
    }
    
      if (!input.password) {
        errors.password = "Password is necessary";
      } else if (!passwordRegex.test(input.password)){
        errors.password = " it must have at least one letter, one number and longer than 8 digits"
      } else {
        errors.password= ""
      }
    
  
    return errors;
  };
  export default validationLogin;
  