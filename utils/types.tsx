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