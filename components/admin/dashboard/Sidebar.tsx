import Users from "./Users";
import style from "./sidebar.module.css"

const Sidebar = () => {
    return (
        <aside className={style.sidebarCont}>
            <h1 className="text-2xl font-semibold text-white">User Management</h1>
            <nav className={style.navCont}>
                <ul className={style.navLinks}>
                    <li className={style.links}>Dashboard</li>
                    <li>Products</li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;