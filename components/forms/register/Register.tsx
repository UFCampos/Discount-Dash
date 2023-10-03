"use client";
import { useDispatch } from "@/lib/redux/hooks";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { setUser } from "@/lib/redux/features/userProfile";
import { usePostProfileMutation } from "@/lib/redux/service/searchProfileAPI";

const Register = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    id: "",
  });
  console.log(newUser);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid; // Aquí obtienes el UID del usuario
        setNewUser({
          ...newUser,
          id: uid,
        });
        const [mutate, { data }] = usePostProfileMutation();
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
      id: "",
    });
  };

  return (
    <div>
      <h1>Create your account</h1>
      <label htmlFor="">Name: </label>
      <input
        type="text"
        value={newUser.name}
        name="name"
        onChange={handleChange}
      />
      <label htmlFor="">lastname</label>
      <input
        type="text"
        value={newUser.lastname}
        name="lastname"
        onChange={handleChange}
      />
      <label htmlFor="">Email: </label>
      <input
        type="text"
        value={newUser.email}
        name="email"
        onChange={handleChange}
      />
      <label htmlFor="">Password: </label>
      <input
        type="text"
        value={newUser.password}
        name="password"
        onChange={handleChange}
      />
      <label htmlFor="">Confirm Password: </label>
      <input
        type="text"
        value={newUser.confirmPassword}
        name="confirmPassword"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default Register;
