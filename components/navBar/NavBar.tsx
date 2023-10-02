'use client'
import Link from "next/link"
import SearchBar from "./searchBar/SearchBar"
import style from "./navBar.module.css"
import MenuButton from "./menu/Menu"
import { Image } from "@nextui-org/react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useState, useEffect } from "react"
import { auth } from "@/firebase/config"
const NavBar = () => {
    const [flag, setFlag] = useState(false)
    const user = auth.currentUser
    const logOut = () => {
        location.reload()
        signOut(auth)
        setFlag(false)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setFlag(true)
            } else {
                false
            }
        })
    },[user])
    return (
      <div className={style.navBar}>
        <Link href="/home" className="text-white">
          <Image
            src="/logopanda.svg"
            width={140}
            height={50}
            alt="Logo Panda"
          />
        </Link>

        <SearchBar />

        <div className={style.buttonsRight}>
          {!flag && (
            <Link href="/login" className="text-white">
              <button>login</button>
            </Link>
          )}
          {flag && (
            <Link href="/" className="text-white" onClick={logOut}>
              <button>logout</button>
            </Link>
          )}
          <MenuButton />
        </div>
      </div>
    );
}

export default NavBar