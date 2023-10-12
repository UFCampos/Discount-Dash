'use client'
import { useSelector } from "@/lib/redux/hooks";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    const user = useSelector(state => state.userProfile);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    if (user.role === 'admin') {
        return (
            <div>
                <h1>Admin Dashboard</h1>
                <Button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <Sidebar />
                </Button>
            </div>
        );
    } else {
        location.replace('/home');
    }
}

export default Dashboard;