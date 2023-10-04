"use client"
import Link from "next/link";
import SearchBar from "./searchBar/SearchBar";
import style from "./navBar.module.css";
import MenuButton from "./menu/Menu";
import { Image } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useSelector } from "@/lib/redux/hooks";
const NavBar = () => {

  const user=useSelector((state)=>state.userProfile)

  const {name, photoUrl}=user

  const pathname = usePathname();


  return (
    pathname !== "/login" ? (
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
          <p>{name}</p>
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
