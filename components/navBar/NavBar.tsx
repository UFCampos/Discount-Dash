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

const NavBar = () => {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [ newId, setNewId] = useState("");
  const [ mutate ] = usePostUserMutation();

  const pathname = usePathname();

  // Const uid = useSelector((state) => state.userProfile.id);

  const { data: dataCategories } = useGetCategoriesQuery(null);

  let uid : string;


  const userId = newId
  const { data, isError } = useGetProfileQuery({ id : userId });

  //!esto es para que cuando el path sea de store no muestre la navbar de cliente
  const notStore=!pathname.includes("/store/")
  console.log(data);
  
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Utiliza el uid almacenado en el estado
        let mappedUser = {};
        user.providerData.forEach((profile) => {
          console.log(profile);
          uid = user.uid;
          mappedUser = {
            id: uid ? uid : profile.uid, // Usar el uid del estado
            email: profile.email,
            photoUrl: profile.photoURL,
            name: profile.displayName,
          };
          console.log(mappedUser);
        });
        setNewId(uid);
        dispatch(setUser(mappedUser));
        // SI TOCAS ESTO SE BORRA TODOS LOS DATOS DE LA BASE DE DATOS
        if( data?.id !== user.uid ){
          console.log('ya tamo');
          
        }else{
          mutate({
            mappedUser
          });
        }
      } else {
        setFlag(false);
      }
    });
  }, []);

  console.log(dataCategories);
  useEffect(() => {
    dispatch(setCategories(dataCategories));
  }, [dataCategories]);

  return pathname !== "/login" &&
    pathname !== "/addProduct" &&
    pathname !== "" && notStore
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
