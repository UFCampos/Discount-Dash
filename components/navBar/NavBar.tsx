"use client";
import Link from "next/link";
import SearchBar from "./searchBar/SearchBar";
import style from "./navBar.module.css";
import MenuButton from "./menu/Menu";
import { useGetCategoriesQuery } from "@/lib/redux/service/categoriesAPI";
import { setCategories } from "@/lib/redux/features/filterSlice";
import { Image } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "@/lib/redux/hooks";
import { useEffect, useState } from "react";
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "@/lib/redux/features/userProfile";

const NavBar = () => {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const pathname = usePathname();

  // const uid = useSelector((state) => state.userProfile.id);

  const { data } = useGetCategoriesQuery(null);
  let uid 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setFlag(true);
        let mappedUser = {};
        mappedUser = {
          id: user.uid, 
          email: user.email,
          photoUrl: user.photoURL,
          name: user.displayName,
        };
        uid = user.uid
        dispatch(setUser(mappedUser));
        console.log(user);
        
      } else {
        setFlag(false);
      }
    });
  },[uid]);

  useEffect(() => {
    setCategories(data);
  }, []);

  return pathname !== "/login" &&
    pathname !== "/addProduct" &&
    pathname !== "" ? (
    <div className={style.navBar} id="inactive">
      <Link href="/" className="text-white">
        <Image src="/logopanda.svg" width={140} height={50} alt="Logo Panda" />
      </Link>

      <SearchBar />

      <div className={style.buttonsRight}>
        <MenuButton />
      </div>
    </div>
  ) : (
    ""
  );
};

export default NavBar;
