import Users from "./Users";

const Sidebar = () => {
    return (
        <aside className="bg-gray-800 text-white w-1/5 p-4">
            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>Products</li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;