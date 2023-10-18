interface productInput {
  marketName: string;
  category: string;
  typeMarket: string;
  onTheStreet: any;
  phone: string;
  street:string;
  streetNumber:string;
  postalCode:string;
  province:string;
  city:string;
  typePerson:string;
  cuit_cuil:string;
  ownerName:string;
  IVA_condition:string;
  facture_type:string;
  dni:string;
  date:string;
  nationality:string;
  password: any;
  confirmPassword: string;
  email: any;
  }
  
  
  const validateMarket = (input: productInput, component:string) => {
  
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
  
    let errors: Partial<productInput & {description: string}> = {};
    if (!input.marketName) {
      errors.marketName = "Market name is required";
    }
  
    if (!input.typeMarket) {
      errors.typeMarket = "Type of market is required";
    }
  
    if (!input.category) {
      errors.category = "Category is required";
    }
  
    if (!input.onTheStreet) {
      errors.onTheStreet = "Please select if it's on the street or not";
    }
  
    if (!input.phone) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(input.phone)) {
      errors.phone = "Phone number should have 10 digits";
    }
    if (!input.street) {
      errors.street = "Street is required";
    }
  
    if (!input.streetNumber) {
      errors.streetNumber = "Street Number is required";
    }
  
    if (!input.postalCode) {
      errors.postalCode = "Postal Code is required";
    }
  
    if (!input.province) {
      errors.province = "Province is required";
    }
  
    if (!input.city) {
      errors.city = "City is required";
    }
    if (!input.typePerson) {
      errors.typePerson = "Type of person is required";
    }
  
    if (!input.cuit_cuil) {
      errors.cuit_cuil = "CUIT / CUIL is required";
    }
  
    if (component === "FactureInfo" && !input.ownerName) {
      errors.ownerName = "Name and Surname are required";
    }
  
    if (!input.IVA_condition) {
      errors.IVA_condition = "IVA condition is required";
    }
  
    if (!input.facture_type) {
      errors.facture_type = "Invoice type is required";
    }
  
    if (!input.dni) {
      errors.dni = "Document number is required";
    }
  
    if (component === "FactureInfo" && !input.date) {
      errors.date = "Birthdate is required";
    }
  
    if (!input.nationality) {
      errors.nationality = "Nationality is required";
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
  export default validateMarket;