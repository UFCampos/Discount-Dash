"use client";
import { auth } from "@/firebase/config";
import { toggleMenu } from "@/lib/redux/features/menuSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { signInProvider } from "@/app/utils";
import Link from "next/link";
import style from "./login.module.css";
import { useDispatch, useSelector } from "@/lib/redux/hooks";
import { setUser } from "@/lib/redux/features/userProfile";
import { onAuthStateChanged } from "firebase/auth";
import { useGetUserQuery } from "@/lib/redux/service/usersRegisterAPI";

const Login = () => {
  
  const [uid, setUid] = useState("");

  const { data } = useGetUserQuery({ id: uid });

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
        const { user } = userCredential;
        const { uid } = user; // Aquí obtienes el UID del usuario
        setUid(uid);
        const mappedUser = {
          id: uid,
          email: user.email,
          photoUrl: user.photoURL,
          name: user.displayName,
        };
        dispatch(setUser(mappedUser));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const isOpen = useSelector((state) => state.menu.isOpen);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Utiliza el uid almacenado en el estado
        let mappedUser = {};
        user.providerData
          ? user.providerData.forEach((profile) => {
              mappedUser = {
                id: uid ? uid : profile.uid, // Usar el uid del estado
                email: profile.email,
                photoUrl: profile.photoURL,
                name: profile.displayName,
              };
            })
          : (mappedUser = {
              id: uid ? uid : user.uid, // Usar el uid del estado
              email: user.email,
              photoUrl: user.photoURL,
              name: user.displayName,
            });

        dispatch(setUser(mappedUser));
      }
    });
  }, [uid, dispatch]);

  useEffect(() => {
    if (isOpen) {
      dispatch(toggleMenu());
    }
  }, [isOpen]);
  console.log(uid);

  return (
    <main className={style.mainLogin}>
      <form className={style.form} onSubmit={handleSubmit}>
        <p className="title text-center">Login</p>
        <div className={style.flexColumn}>
          <label>Email </label>
        </div>
        <div className={style.inputForm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 32 32"
            height="20"
          >
            <g data-name="Layer 3" id="Layer_3">
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
            </g>
          </svg>
          <input
            placeholder="Enter your Email"
            name="email"
            className={style.input}
            type="text"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className={style.flexColumn}>
          <label>Password </label>
        </div>
        <div className={style.inputForm}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="-64 0 512 512"
            height="20"
          >
            <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c-26.453125 0-48 21.523438-48 48v224c0 26.476562 21.546875 48 48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0-16 7.167969-16 16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
            <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
          </svg>
          <input
            placeholder="Enter your Password"
            className={style.input}
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className={style.flexRow}>
          <div>
            <input type="radio" />
            <label>Remember me </label>
          </div>
          <span className={style.span}>
            <Link href={"/resetPassword"}>
              <h3>Forgot your password?</h3>
            </Link>
          </span>
        </div>
        <button className={style.buttonSubmit} type="submit">
          Sign In
        </button>
        <p className={style.p}>
          Not acount?
          <span className={style.span}>
            <Link href={"/register"}>Sign Up</Link>
          </span>
        </p>
        <p className={style.p}>Or With</p>
        <div className={style.flexRow}>
          <button
            className={style.btn}
            onClick={(e) => {
              signInProvider(e);
            }}
            value={"google"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              width="20"
              id="Layer_1"
              x="0px"
              y="0px"
              xmlSpace="preserve"
            >
              <path
                d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                  c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                  C103.821,274.792,107.225,292.797,113.47,309.408z"
                style={{ fill: "#FBBB00" }}
              />
              <path
                d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                  c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                  c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                style={{ fill: "#518EF8" }}
              />
              <path
                d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                  c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                  c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                style={{ fill: "#28B446" }}
              />
              <path
                d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                  c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                  C318.115,0,375.068,22.126,419.404,58.936z"
                style={{ fill: "#F14336" }}
              />
            </svg>{" "}
            Google
          </button>

          <button
            className={style.btn}
            onClick={(e) => {
              signInProvider(e);
            }}
            value={"facebook"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              height="20"
              width="20"
              viewBox="0 0 408.788 408.788"
            >
              <g>
                <path
                  fill="#475993"
                  d="M353.701 0H55.087C24.665 0 .002 24.662.002 55.085v298.616c0 30.423 24.662 55.085 55.085 55.085h147.275l.251-146.078h-37.951a8.954 8.954 0 0 1-8.954-8.92l-.182-47.087a8.955 8.955 0 0 1 8.955-8.989h37.882v-45.498c0-52.8 32.247-81.55 79.348-81.55h38.65a8.955 8.955 0 0 1 8.955 8.955v39.704a8.955 8.955 0 0 1-8.95 8.955l-23.719.011c-25.615 0-30.575 12.172-30.575 30.035v39.389h56.285c5.363 0 9.524 4.683 8.892 10.009l-5.581 47.087a8.955 8.955 0 0 1-8.892 7.901h-50.453l-.251 146.078h87.631c30.422 0 55.084-24.662 55.084-55.084V55.085C408.786 24.662 384.124 0 353.701 0z"
                ></path>
              </g>
            </svg>{" "}
            Facebook
          </button>
        </div>
      </form>
      <div className={style.back}>
        <Link href={"/home"} className="flex items-center text-center">
          <span className="material-symbols-outlined">arrow_back </span> Home
        </Link>
      </div>
    </main>
  );
};

export default Login;
