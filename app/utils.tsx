import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/config";
const googleProvider= new GoogleAuthProvider();
const facebookProvider= new FacebookAuthProvider();


export const signInProvider = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value: string = event.currentTarget.value;
    console.log(value)
    signInWithPopup(auth, value === "google" ? googleProvider : facebookProvider)
        .then((response) => {
            console.log(response.user);
        })
        .catch((error) => {
            alert(error.message)
        }

        )
} 

export interface Product {
    name: string;
    price: number;
    stock: number;
    brand: string;
    category: string;
    image: string;

  }