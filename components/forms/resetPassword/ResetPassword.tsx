"use client";
import { auth } from "@/firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => alert("Se envio correo de reincio de contraseña"))
      .catch((error) => {
        alert(error.message);
      });
  };

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}></form>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          onChange={handlerChange}
          type="email"
          id="email"
          name="email"
          value={email}
        />
      </div>
      <div>
        <button type="submit">Reiniciar contraseña</button>
      </div>
    </div>
  );
};

export default ResetPassword;
