"use client";
import Link from "next/link";
import "./menuDropdown.css";
import { useSelector, useDispatch } from "@/lib/redux/hooks";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useGetAuthUserQuery } from "@/lib/redux/service/searchProfileAPI";
const MenuDropdown = () => {
  const [flag, setFlag] = useState(false);
  const { data: user } = useGetAuthUserQuery(null);
  const logOut = () => {
    signOut(auth);
    setFlag(false);
    fetch('/api/users/logout')
    .finally(() => {
      console.log("logout");
    });
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
  const { id } = useSelector((state) => state.userProfile);

  const isOpen = useSelector((state) => state.menu.isOpen);
  return (
    <>
      {isOpen ? (
        <aside className="menu-dropdown flex flex-row items-center justify-end">
          <div className="menu-cont flex flex-col items-center justify-start">
            <ul className="flex flex-col justify-center items-center">
              
                <li className={pathname === "/home" ? "active" : ""}>
                  <Link href={"/home"}>Products</Link>
                </li>
				
                <li className={pathname === "/users/profile" ? "active" : ""}>
                  <Link href={`/users/profile/${id}`}>Profile </Link>{" "}
                  <span className="material-symbols-outlined">
                    {" "}
                    account_circle
                  </span>
                </li>
				
                <li className={pathname === "/about" ? "active" : ""}>
                  <Link href={"/about"}>
                    About{" "}
                    <span className="material-symbols-outlined">
                      diversity_3
                    </span>
                  </Link>
                </li>

                {user?.customClaims?.admin && flag ? (
                  <li className={pathname === "/admin" ? "active" : ""}>
                    <Link href={"/users/admin/dashboard"}>Admin </Link>{" "}
                    <span className="material-symbols-outlined">
                      admin_panel_settings
                    </span>
                  </li>
                ) : null
                }
				
              {!flag ? (
                <li className={pathname === "/register" ? "active" : ""}>
                  <Link href={"/register"}>Register </Link>{" "}
                  <span className="material-symbols-outlined"> person_add</span>
                </li>
                ) : null }
                
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
