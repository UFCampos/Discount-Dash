import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/config";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const signInProvider = async (event: React.MouseEvent<HTMLButtonElement>) => {
  const value: string = event.currentTarget.value;

  try {
    const response = await signInWithPopup(auth, value === "google" ? googleProvider : facebookProvider);
    const user = {
      id: response.user.uid,
      email: response.user.email,
      photoUrl: response.user.photoURL,
      name: response.user.displayName
    };
    console.log(user);
    return user;
  } catch (error) {
    alert(error.message);
    return null; // Devuelve null en caso de error
  }
};
