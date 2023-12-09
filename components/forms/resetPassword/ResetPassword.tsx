"use client";
import { toast } from "sonner";
import { auth } from "@/firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent");
      })
      .catch((error) => {
        toast.error("Error sending email, try again");
      });
  };

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
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
          <button type="submit">Send email</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
