"use client";
import Link from "next/link";
import "./menuDropdown.css";
import { useSelector, useDispatch } from "@/lib/redux/hooks";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
const MenuDropdown = () => {
  const [flag, setFlag] = useState(false);
  const user = auth.currentUser;
  const logOut = () => {
    location.reload();
    signOut(auth);
    setFlag(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setFlag(true);
      } else {
        false;
      }
    });
  }, [user]);
  const pathname = usePathname();
  const {id} = useSelector((state) => state.userProfile);

  const isOpen = useSelector((state) => state.menu.isOpen);
  return (
    <>
      {isOpen ? (
        <aside className="menu-dropdown flex flex-row items-center justify-end">
          <div className="menu-cont flex flex-col items-center justify-start">
            <ul className="flex flex-col justify-center items-center">
              {pathname === "/home" ? (
                <li className="active">
                  <Link href={"/home"}>Products</Link>
                </li>
              ) : (
                <li>
                  <Link href={"/home"}>Products</Link>
                </li>
              )}

              {pathname === "/addProduct" ? (
                <li className="active">
                  <Link href={"/addProduct"}>Create product</Link>
                  <span className="material-symbols-outlined"> add</span>
                </li>
              ) : (
                <li>
                  <Link href={"/addProduct"}>Create product</Link>
                  <span className="material-symbols-outlined"> add</span>
                </li>
              )}
              {pathname === "users/profile" ? (
                <li className="active">
                  <Link href={`/users/profile`}>Profile </Link>{" "}
                  <span className="material-symbols-outlined">
                    {" "}
                    account_circle
                  </span>
                </li>
              ) : (
                <li>
                  <Link href={`/users/profile/${id}`}>Profile </Link>{" "}
                  <span className="material-symbols-outlined">
                    {" "}
                    account_circle
                  </span>
                </li>
              )}
              {pathname === "/about" ? (
                <li className="active">
                  <Link href={"/about"}>
                    About{" "}
                    <span className="material-symbols-outlined">
                      diversity_3
                    </span>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href={"/about"}>About </Link>
                  <span className="material-symbols-outlined">diversity_3</span>
                </li>
              )}
              {pathname === "/register" ? (
                <li className="active">
                  <Link href={"/register"}>Register </Link>{" "}
                  <span className="material-symbols-outlined"> person_add</span>
                </li>
              ) : (
                <li>
                  <Link href={"/register"}>Register </Link>{" "}
                  <span className="material-symbols-outlined"> person_add</span>
                </li>
              )}
              {!flag ? (
                <li>
                  <Link href="/login">
                    login{" "}
                    <span className="material-symbols-outlined">login</span>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link href="/" onClick={logOut} className="text-center">
                    logout{" "}
                    <span className="material-symbols-outlined">login</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </aside>
      ) : (
        ""
      )}
    </>
  );
};

export default MenuDropdown;
