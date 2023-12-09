'use client'
import { useGetAllUsersQuery } from "@/lib/redux/service/searchProfileAPI";
import { User } from "@/utils/types";
import { useEffect, useState } from "react";
import { usePostAdminMutation, useBanUserMutation, } from "@/lib/redux/service/usersRegisterAPI";
import style from "./users.module.css"

// You might import your user data or fetch it from an API here

const Users = () => {
    const { data } = useGetAllUsersQuery(null);

    const [postAdmin] = usePostAdminMutation();

    const [banUser] = useBanUserMutation();

    const handleGiveAdmin = (userId: string) => {
        postAdmin({
            id: userId,
            admin: true
        })
            .finally(() => {
                location.reload();
            })
    }

    const handleRemoveAdmin = (userId: string) => {
        postAdmin({
            id: userId,
            admin: false
        })
        .finally(() => {
            location.reload();
        })
    }

    const handleBan = (userId: string) => {
        banUser({
            id: userId,
            disabled: true,
        })
        .finally(() => {
            location.reload();
        })
    }

    const handleUnban = (userId: string) => {
        banUser({
            id: userId,
            disabled: false,
        })
        .finally(() => {
            location.reload();
        })
        location.reload();
    }

    return (
        <div className={style.userCont}>

            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            UID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Role
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data?.map((user: User) => (
                        <tr key={user.uid}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {user.uid}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {user.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {user.customClaims?.admin ? "Admin" : "User"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button color="primary">
                                    {
                                        user?.disabled ?

                                            <span onClick={() => handleUnban(user.uid)}>Unban</span>
                                            :
                                            <span onClick={() => handleBan(user.uid)}>Ban</span>
                                    }
                                </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button>
                                    {
                                        user.customClaims?.admin ?

                                            <span onClick={() => handleRemoveAdmin(user.uid)}>Revoke Admin</span>
                                            :
                                            <span onClick={() => handleGiveAdmin(user.uid)}>Give Admin</span>
                                    }
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
