import { useSelector } from "@/lib/redux/hooks";

const Dashboard = () => {
    const user = useSelector(state => state.userProfile);

    if (user.role === 'admin') {
        return (
            <div>
                <h1>Admin Dashboard</h1>
            </div>
        );
    } else {
        location.replace('/home');
    }
}

export default Dashboard;