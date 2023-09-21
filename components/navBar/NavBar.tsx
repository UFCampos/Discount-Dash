import Link from "next/link"
import SearchBar from "./searchBar/SearchBar"
import style from "./navBar.module.css"
import MenuButton from "./menu/Menu"
const NavBar = () => {

    return (
        <div className={style.navBar}>
            <Link href="/home"><button className={style.home}>home</button></Link>
            {/* <Link href="/search"><button>asd</button></Link> */}
            <SearchBar />
            {/* <Link href="/cart"><button>asd</button></Link> */}
            <div className={style.buttonsRight}>
                <Link href="/login"><button className='rounded-full background-blue-500'>asd</button></Link>
                <MenuButton />
            </div>
        </div>
    )
}

export default NavBar