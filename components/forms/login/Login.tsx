"use client";
import { auth } from "@/firebase/config";
import { toggleMenu } from "@/lib/redux/features/menuSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect} from "react";
import { signInProvider } from "@/app/utils";
import Link from "next/link";
import style from "./login.module.css";
import { useRouter } from "next/navigation";
import { useDispatch } from "@/lib/redux/hooks";
import { setUser } from "@/lib/redux/features/userProfile";
import { onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const [uid, setUid] = useState("");

  const dispatch=useDispatch()


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
      })
      .catch((error) => {
        console.error(error);
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
    <main className={style.mainLogin}>
      <h1 className={style.logTitle}>Log in</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.flexColumn}>
          <label>Email </label>
        </div>
        <div className={style.inputForm}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 32 32" height="20">
            <g data-name="Layer 3" id="Layer_3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
            </g>
          </svg>
          <input placeholder="Enter your Email" name="email" className={style.input} type="text" value={formData.email} onChange={handleInputChange}/>
        </div>

        <div className={style.flexColumn}>
          <label>Password </label>
        </div>
        <div className={style.inputForm}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="-64 0 512 512" height="20">
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c-26.453125 0-48 21.523438-48 48v224c0 26.476562 21.546875 48 48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0-16 7.167969-16 16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
          </svg>
          <input placeholder="Enter your Password" className={style.input} type="password" id="password" name="password" value={formData.password} onChange={handleInputChange}/>
        </div>

        <div className={style.flexRow}>
          <div>
            <input type="radio" />
            <label>Remember me </label>
          </div>
          <span className={style.span}>Forgot password?</span>
        </div>
        <button className={style.buttonSubmit} type="submit">Sign In</button>
        <p className={style.p}>Not acount?<span className={style.span}><Link href={"/register"}>Sign Up</Link></span></p>
        <p className={style.p}>Or With</p>
        <div className={style.flexRow}>
          <button className={style.btn} onClick={(e) => signInProvider(e)} value={"google"}>Google</button>
          <button className={style.btn} onClick={(e) => signInProvider(e)} value={"facebook"}>Facebook</button>
        </div>
      </form>
      <div className={style.back}>
        <Link href={"/home"} className="flex items-center text-center"><span className="material-symbols-outlined">arrow_back </span> Home</Link>
      </div>
    </main>
  );
};

export default Login;
