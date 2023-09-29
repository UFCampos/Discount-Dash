import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/config";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const signInProvider = (event: React.MouseEvent<HTMLButtonElement>) => {
  const value: string = event.currentTarget.value;
  const provider = value === "google" ? googleProvider : facebookProvider;
  signInWithPopup(auth, provider)
};
