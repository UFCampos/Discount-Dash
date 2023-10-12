"use client";
import {
  getAuth,
  updatePassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useSelector } from "@/lib/redux/hooks";

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
    console.log("entre a la funcion");
    updatePassword(user, newPassword.newPassword)
      .then(() => {
        console.log("Contraseña actualizada");

        // La contraseña fue actualizada
      })
      .catch((error) => {
        console.log(error);
        // Ocurrió un error
      });
  };

  return (
    <div>
      <h1>Change your password</h1>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={changePassword} />
        <label htmlFor="newPassword">New password</label>
        <input type="password" name="newPassword" onChange={changePassword} />
        <label htmlFor="confirmPassword">Confirm New password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={changePassword}
        />
        <button type="submit" onClick={handleChangePassword}>
          Change password
        </button>
      </div>
    </div>
  );
};

export default UpdatePasswordUser;
