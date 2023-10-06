"use client";
import { useDispatch, useSelector } from "@/lib/redux/hooks";
import { useEffect, useState } from "react";
import { signInProvider } from "@/app/utils";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { setUser } from "@/lib/redux/features/userProfile";
import Link from "next/link";
import { usePostProfileMutation } from "@/lib/redux/service/searchProfileAPI";
import { useRouter } from "next/navigation";
import "./register.css"
import { toggleMenu } from "@/lib/redux/features/menuSlice";
const Register = () => {

  const router=useRouter()

  const dispatch = useDispatch();

  const isOpen=useSelector((state)=>state.menu.isOpen)

  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    id: ""
  });
  console.log(newUser);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const [mutate, { data }] = usePostProfileMutation();

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid; // Aquí obtienes el UID del usuario
        sendEmailVerification(user); // Correo de validación del email
        setNewUser({
          ...newUser,
          id: uid,
        });
        
        mutate({
          name: newUser.name,
          lastname: newUser.lastname,
          email: newUser.email,
          id: uid,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    setNewUser({
      name: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      id: ""
    });

    setTimeout(()=>{router.push("/home")}, 2000)
  };

  useEffect(()=>{
    if(isOpen){
      dispatch(toggleMenu())
    }
  }, [])
  return (
    <form className="form" onSubmit={handleSubmit}>
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input 
            required 
            value={newUser.name}
            name="name"
            onChange={handleChange}
            placeholder="" 
            type="text" 
            className="input"
            />
            <span>Firstname</span>
        </label>

        <label>
            <input 
            required 
            placeholder="" 
            type="text" 
            className="input"
            value={newUser.lastname}
            name="lastname"
            onChange={handleChange}
            
            />
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input 
        required 
        placeholder="" 
        type="email" 
        className="input"
        value={newUser.email}
        name="email"
        onChange={handleChange}
        />
        <span>Email</span>
    </label> 
        
    <label>
        <input 
        required 
        placeholder="" 
        type="password" 
        className="input"
        value={newUser.password}
        name="password"
        onChange={handleChange}
        />
        <span>Password</span>
    </label>
    <label>
        <input 
        required 
        placeholder="" 
        type="password" 
        className="input"
        value={newUser.confirmPassword}
        name="confirmPassword"
        onChange={handleChange}
        />
        <span>Confirm password</span>
    </label>
    <button className="submit">Submit</button>
    <p className="signin">Already have an acount ? <Link href="/login">Log in</Link> </p>
</form>
  );
};

export default Register;
