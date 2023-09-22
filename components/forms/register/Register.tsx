'use client';

import { useDispatch } from "@/lib/redux/hooks";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { signInProvider } from "@/app/utils";


const Register = () => {

    const [newUser, setNewUser] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewUser({
            ...newUser,
            [name]: value
        })
    }

    const handleSubmit = () => {

        createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(userCredential)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })

        setNewUser({
            name: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }
    
    return (
        <div>
            <h1>Create your account</h1>
            <label htmlFor="">Name: </label>
            <input type="text" value={newUser.name} name="name" onChange={handleChange} />
            <label htmlFor="">lastname</label>
            <input type="text" value={newUser.lastname} name="lastname" onChange={handleChange} />
            <label htmlFor="">Email: </label>
            <input type="text" value={newUser.email} name="email" onChange={handleChange} />
            <label htmlFor="">Password: </label>
            <input type="text" value={newUser.password} name="password" onChange={handleChange} />
            <label htmlFor="">Confirm Password: </label>
            <input type="text" value={newUser.confirmPassword} name="confirmPassword" onChange={handleChange} />
            <button onClick={handleSubmit}>Create</button>
            <div>
                <button onClick={signInProvider} value={"google"}>Sign in with Google</button>
            </div>
            <div>
                <button onClick={signInProvider} value={"facebook"} >Sign in with Facebook</button>
            </div>
        </div>
    )
}

export default Register