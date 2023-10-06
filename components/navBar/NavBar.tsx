"use client"
import Link from "next/link";
import SearchBar from "./searchBar/SearchBar";
import style from "./navBar.module.css";
import MenuButton from "./menu/Menu";
import { useGetCategoriesQuery } from "@/lib/redux/service/categoriesAPI";
import { setCategories } from "@/lib/redux/features/filterSlice";
import { Image } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useSelector } from "@/lib/redux/hooks";
import { useDispatch } from "@/lib/redux/hooks";
import { useEffect } from "react";


const NavBar = () => {

  const dispatch=useDispatch()

  const user=useSelector((state)=>state.userProfile)

  const {name, photoUrl}=user

  const pathname = usePathname();

  const {data}=useGetCategoriesQuery(null)


  useEffect(()=>{
    setCategories(data)
  }, [])
  
  return (
    pathname !== "/login" && pathname!== "/addProduct" && pathname!=="" &&pathname!=="/register" ? (
      <div className={style.navBar} id="inactive">
        <Link href="/" className="text-white">
          <Image
            src="/logopanda.svg"
            width={140}
            height={50}
            alt="Logo Panda"
          />
        </Link>

        <SearchBar />

        <div className={style.buttonsRight}>
          <MenuButton />
        </div>
      </div>
    ) 
    : 
    ""
    )
    ;
};

export default NavBar;
