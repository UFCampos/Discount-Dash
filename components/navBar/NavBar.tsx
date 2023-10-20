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
import { usePostUserMutation } from "@/lib/redux/service/usersRegisterAPI";
import { useGetProfileQuery } from "@/lib/redux/service/searchProfileAPI";
import { useGetUserQuery } from "@/lib/redux/service/usersRegisterAPI";

const NavBar = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const user = auth.currentUser;
  
  const id = useSelector((state) => state.userProfile.id);
  const { data } = useGetUserQuery({ id });

  const { data: dataCategories } = useGetCategoriesQuery(null);

  const isStore=pathname.includes("/store")
  
  const isShopOrder=pathname.includes("/shopOrders")

  let uid: string;

  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Utiliza el uid almacenado en el estado
        let mappedUser = {
          id: user.uid, // Usar el uid del estado
          email: user.email,
          photoUrl: user.photoURL,
          name: user.displayName,
        };
        dispatch(setUser(mappedUser));
      }
    });
  }, [user]);

  useEffect(() => {
    dispatch(setCategories(dataCategories));
  }, [dataCategories]);

  return pathname !== "/login"  &&
  pathname !== "" && !isStore && !isShopOrder
  ? (
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
