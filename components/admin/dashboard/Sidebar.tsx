import style from "./sidebar.module.css"
import Link from "next/link";

const Sidebar = () => {
    return (
        <aside className={style.sidebarCont}>
            <h1 className="text-2xl font-semibold text-black">Admin Dashboard</h1>
            <nav className={style.navCont}>
                <ul className={style.navLinks}>
                    <li className={style.links}><button disabled={true}><Link href="./dashboard/">Users Management</Link></button></li>
                    <li className={style.links}><button disabled={true}>Shops Management</button></li>
                    <li className={style.links}><button disabled={true}>Orders Management</button></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;