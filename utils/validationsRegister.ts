interface userInputs {
  name: string;
  lastname: string;
  password: any;
  confirmPassword: string;
  email: any;
}

const validationRegister = (input: userInputs) => {
  
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let errors: Partial<userInputs> = {};

  if (!input.name) {
    errors.name = "Name is necessary";
  }
  else {
    errors.name = ""
  }
  if (!input.lastname) {
    errors.lastname = "Last name is necessary";
  }
  else{
    errors.lastname = ""
  }

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

  if (input.password !== input.confirmPassword) {
    errors.confirmPassword = "Password do not match";
  } 
  else{
    errors.confirmPassword= ""
  }

  return errors;
};
export default validationRegister;
