import { useGetAllUsersQuery } from "@/lib/redux/service/searchProfileAPI"
const Users = () => { 
    const { data } = useGetAllUsersQuery(null);
    return (
        <div>
            <h1>Users</h1>
            <div className="flex ">
                <div>
            {data?.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
            <div>
                </div>
                {data?.map((user) => (
                    <p key={user.id}>{user.email}</p>
                ))}
            </div>
                    </div>
        </div>
    )
}

export default Users