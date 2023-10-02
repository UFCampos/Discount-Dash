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
}

export interface CartProduct {
    name: string;
    price: number;
    stock: number;
    image: string;
    category: string;
    quantity: number;   
}

export interface Categories {
    category: string;
    order: string;
    price: string;
    establecimiento: string;
}