"use client";
import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { signInProvider } from "@/app/utils";
import { useDispatch } from "@/lib/redux/hooks";
import { setUser } from "@/lib/redux/features/userProfile";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const Login = () => {
  const [uid, setUid] = useState("");

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
      .then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid; // Aquí obtienes el UID del usuario
        setUid(uid);
        console.log(uid);
      })
      .catch((error) => {
        console.error("Error de inicio de sesión:", error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Utiliza el uid almacenado en el estado
        let mappedUser = {};
        user.providerData.forEach((profile) => {
          mappedUser = {
            id: uid, // Usar el uid del estado
            email: profile.email,
            photoUrl: profile.photoURL,
            name: profile.displayName,
          };
        });
        // Dispatch de setUser con mappedUser
        dispatch(setUser(mappedUser));
      }
    });
  }, [uid, dispatch]);

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
        <button onClick={(e) => signInProvider(e)} value={"google"}>
          Sign in with Google
        </button>
      </div>
      <div>
        <button onClick={(e) => signInProvider(e)} value={"facebook"}>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
