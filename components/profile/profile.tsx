'use client'
import { useGetProfileQuery } from "@/lib/redux/service/searchProfileAPI"

const Profile = (id : Number) => {

    const { data } = useGetProfileQuery({id})


    return(
        <div>
            <h1>Profile</h1>
            <p>This is the profile page</p>
            <div>

            </div>
        </div>
    )
}

export default Profile