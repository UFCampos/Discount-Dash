"use client";
import {
  getAuth,
  updatePassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useSelector } from "@/lib/redux/hooks";
import style from "./UpdatePassword.module.css"

const UpdatePasswordUser = () => {
  const [newPassword, setNewPassword] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const auth = getAuth();
  const user = auth.currentUser;

  const userProfile = useSelector((state) => state.userProfile);
  console.log(userProfile.email);

  signInWithEmailAndPassword(auth, userProfile.email, newPassword.password)
    .then((userCredential) => {
      // La contraseña es correcta y el usuario ha iniciado sesión.
      const user = userCredential.user;
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return false;
      // La contraseña es incorrecta o el usuario no existe.
    });

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPassword({
      ...newPassword,
      [name]: value,
    });
  };

  const handleChangePassword = () => {
    if (!user) return null
    updatePassword(user, newPassword.newPassword)
      .then(() => {
        alert("La contraseña ha sido actualizada");
        // La contraseña fue actualizada
      })
      .catch((error) => {
        alert(error.message);
        // Ocurrió un error
      });
  };

  return (
    <div className={style.cont}>
      <form className={style.form} onSubmit={handleChangePassword}>
        <h1 className={style.signup}>Change your passworld</h1>
        <input type="password" placeholder="Passworld" className={style.formInput} onChange={changePassword}/>
        <input type="password" placeholder="New password" className={style.formInput} onChange={changePassword}/>
        <input type="password" placeholder="Confirm new password" className={style.formInput} onChange={changePassword}/>
        <button className={style.formSubmmit} type="submit">
            Change
        </button>
      </form>
    </div>
  );
};

export default UpdatePasswordUser;
