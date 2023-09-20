import { app } from "./config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

export default async function signIn(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (error: unknown) {
        if(error instanceof Error) {
            error = error.message;
        }
        else {
            error = String(error);
        }
    }

    return { result, error };
}
