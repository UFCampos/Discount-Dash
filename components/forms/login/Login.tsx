"use client";
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { signInProvider } from "@/app/utils";
import { setUser } from "@/lib/redux/features/userProfile";
import { useDispatch } from "@/lib/redux/hooks";

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((response) => {
        dispatch(
          setUser({
            id: response.user.uid,
            email: response.user.email,
            photoUrl: response.user.photoURL,
            name: response.user.displayName,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handlerClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event;
    const data = await signInProvider(value);
    dispatch(
      setUser({
        id: data.id,
        email: data.email,
        photoUrl: data.photoUrl,
        name: data.name,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
      <div>
        <button onClick={handlerClick} value={"google"}>
          Sign in with Google
        </button>
      </div>
      <div>
        <button onClick={signInProvider} value={"facebook"}>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;