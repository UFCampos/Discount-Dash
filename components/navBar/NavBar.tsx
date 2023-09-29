'use client'
import Link from "next/link"
import SearchBar from "./searchBar/SearchBar"
import style from "./navBar.module.css"
import MenuButton from "./menu/Menu"
import { Image } from "@nextui-org/react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useState } from "react"
import { auth } from "@/firebase/config"
const NavBar = () => {
    const [user, setUser] = useState(false)
    const userUpdate = () => {
        location.reload()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(true)
                signOut(auth)
            }
        })
    }
    return (
        <div className={style.navBar}>
            <Link href="/home" className="text-white"><Image src="/logopanda.svg" width={140} height={50} alt="Logo Panda"/></Link>
            {/* <Link href="/search"><button>asd</button></Link> */}
            <SearchBar />
            {/* <Link href="/cart"><button>asd</button></Link> */}
            <div className={style.buttonsRight}>
                {user ? 
                <Link href="/login" className="text-white"><button>login</button></Link> :
                <Link href="/" className="text-white" onClick={userUpdate}><button>logout</button></Link>
                }
                <MenuButton />
            </div>
        </div>
    )
}

export default NavBar