'use client'
import { useSelector } from "@/lib/redux/hooks";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import Sidebar from "./Sidebar";
import Users from "./Users";
import { useGetAuthUserQuery } from "@/lib/redux/service/searchProfileAPI";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { data: user } = useGetAuthUserQuery(null);
    console.log(user);

    if (user?.claims?.admin) {
        return (
            <div>
                <h1>Admin Dashboard</h1>
                    <Sidebar />
                    <Users/>
            </div>
        );
    } else {
        return (
            <div>
                <h1>La ruta está protegida, guiño guiño</h1>
            </div>
        );
    }
}

export default Dashboard;