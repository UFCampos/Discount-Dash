export interface Product {
    name: string;
    price: number;
    stock: number;
    image: string;
    brand: string;
    category: string;
    nameToLowerCase: string;
}

export interface CartProduct {
    name: string;
    price: number;
    stock: number;
    image: string;
    category: string;
    quantity: number;   
    id: string;
}

export interface Categories {
    category: string;
    order: string;
    price: string;
    establecimiento: string;
}

//!interfaces of register Market

//?prop interfaces
export interface marketProps{
    valueState:{
        marketName:string,
        typeMarket:string,
        category:string,
        onTheStreet:string,
        phone:string,
    }
    errors:{
        emptyName:string,
        longName:string,
        emptyType:string,
        emptyCategory:string,
        emptyPhone:string,
        longPhone:string,
        invalidPhone:string,
        shortPhone:string
    }
    handleChange:(event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void,
}


export interface locationProps{
    valueState:{
        street:string,
        streetNumber:string,
        postalCode:string,
        province:string,
        city:string,
    }
    handleChange:(event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void,
    errors:{
        emptyStreet:string,
        emptyNumber:string,
        emptyPD:string,
        emptyProvince:string,
        invalidProvince:string,
        emptyCity:string,
        invalidCity:string
    }
}

export interface factureProps{
    valueState:{
        typePerson:string,
        cuit_cuil:string,
        ownerName:string,
        IVA_condition:string,
        facture_type:string,
        dni:string,
        date:string,
        nationality:string
    }
    handleChange:(event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void,
    errors:{
        emptyTypePerson:string,
        emptyCUIT:string,
        emptyName:string,
        invalidName:string,
        emptyIVA:string,
        emptyInvoice:string,
        emptyDocument:string,
        emptyBirth:string,
        emptyNationality:string,
        invalidNationality:string
    }
}

export interface loginProps{
    valueState:{
        email:string,
        password:string,
        confirmPassword:string
    }
    handleChange:(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>void,
    errors:{
        emptyEmail:string,
        invalidEmail:string,
        shortPassword:string,
        diferentPassword:string
    }
}
//?validation info interfaces
export interface allDataMarket {
    marketName:string,
    typeMarket:string,
    category:string,
    onTheStreet:string,
    phone:string,
    street:string,
    streetNumber:string,
    postalCode:string,
    province:string,
    city:string,
    typePerson:string,
    cuit_cuil:string,
    ownerName:string,
    IVA_condition:string,
    facture_type:string,
    dni:string,
    date:string,
    nationality:string,
    email:string,
    password:string,
}
export interface marketInfo {
    marketName:string,
    typeMarket:string,
    category:string,
    onTheStreet:string,
    phone:string,
}
export interface locationInfo{
        street:string,
        streetNumber:string,
        postalCode:string,
        province:string,
        city:string,
}
  
export interface factureInfo{
    typePerson:string,
    cuit_cuil:string,
    ownerName:string,
    IVA_condition:string,
    facture_type:string,
    dni:string,
    date:string,
    nationality:string,
  }
export interface loginInfo{
    email:string,
    password:string,
    confirmPassword:string
  }

  //?validation Errors interfaces

export interface marketErrors {
    emptyName:string,
    longName:string,
    emptyType:string,
    emptyCategory:string,
    emptyPhone:string,
    longPhone:string,
    invalidPhone:string,
    shortPhone:string
  }

export interface locationErrors {
    emptyStreet:string,
    emptyNumber:string,
    emptyPD:string,
    emptyProvince:string,
    invalidProvince:string,
    emptyCity:string,
    invalidCity:string
}
export interface factureErrors{
    emptyTypePerson:string,
    emptyCUIT:string,
    emptyName:string,
    invalidName:string,
    emptyIVA:string,
    emptyInvoice:string,
    emptyDocument:string,
    emptyBirth:string,
    emptyNationality:string,
    invalidNationality:string
}

export interface loginError{
    emptyEmail:string,
    invalidEmail:string,
    shortPassword:string,
    diferentPassword:string
}
