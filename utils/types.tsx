export type Product = {
	name: string;
	price: number;
	stock: number;
	image: string;
	brand: string;
	category: string;
	nameToLowerCase: string;
};

export type CartProduct = {
	name: string;
	price: number;
	stock: number;
	image: string;
	category: string;
	quantity: number;
	id: string;
};

export interface Categories {
    category: string;
    order: string;
    price: string;
    establecimiento: string;
}

export type Review = {
    id: string;
    name: string;
    rating: number;
    comment: string;
    userId: string;
    productId: string;
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
    id:string,
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

export interface login{
    email:string,
    password:string
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

export interface loginErrorStore{
    emptyEmail:string,
    invalidEmail:string,
    emptyPassword:string
    shortPassword:string
}


export type Item = {
	itemId?: string;
	name: string;
	image: string;
	price: string;
	brand: string;
	id: string;
	stock: string;
	normalPrice: string;
};

export type CardProduct = {
	name: string;
	image: string;
	price: string;
	brand: string;
	itemId: string;
	stock: string;
	normalPrice: string;
    has: boolean
};

export type DetailModalProps = {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	id: string;
};

export type User = {
	id: string;
	name: string;
	lastname: string;
	image: string;
    role: string;
};