"use client";
import {
  getAuth,
  updatePassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "sonner";
import { useState } from "react";
import { useSelector } from "@/lib/redux/hooks";
import style from "./UpdatePassword.module.css";

const UpdatePasswordUser = () => {
  const [newPassword, setNewPassword] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const auth = getAuth();
  const user = auth.currentUser;

  const userProfile = useSelector((state) => state.userProfile);

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

  const handleChangePassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) return null;
    updatePassword(user, newPassword.newPassword)
      .then(() => {
        toast.success("Updated password");
        // La contraseña fue actualizada
      })
      .catch((error) => {
        // Ocurrió un error
        toast.error("Check your current password");
      });
  };

  return (
    <div className={style.cont}>
      <form className={style.form} onSubmit={handleChangePassword}>
        <h1 className={style.signup}>Change your passworld</h1>
        <input
          type="password"
          placeholder="Current password"
          name="password"
          className={style.formInput}
          onChange={changePassword}
        />
        <input
          type="password"
          placeholder="New password"
          name="newPassword"
          className={style.formInput}
          onChange={changePassword}
        />
        <input
          type="password"
          placeholder="Confirm new password"
          name="confirmPassword"
          className={style.formInput}
          onChange={changePassword}
        />
        <button className={style.formSubmmit} type="submit">
          Change
        </button>
      </form>
    </div>
  );
};

export default UpdatePasswordUser;
