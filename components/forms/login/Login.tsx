'use client'
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { signInProvider } from "@/app/utils";

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                alert(error.message)
            })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
                </div>
                <div>
                    <button type="submit">Iniciar Sesión</button>
                </div>
            </form>
            <div>
                <button onClick={signInProvider} value={"google"}>Sign in with Google</button>
            </div>
            <div>
                <button onClick={signInProvider} value={"facebook"} >Sign in with Facebook</button>
            </div>
        </div>
    )
}

export default Login