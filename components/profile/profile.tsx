'use client'
import { useGetProfileQuery } from "@/lib/redux/service/searchProfileAPI"
import Image from "next/image"

type ProfileProps = {
    id : string
}

const Profile: React.FC<ProfileProps> = ({id}) => {

    // const { data } = useGetProfileQuery({id})
    const data = {
        name: "Juan",
        image: "/henry.jpg",
    }

    return(
    <div className="flex flex-col items-center justify-center border-black">
            <h1>Profile</h1>
            <p>This is the profile page</p>
            <div>
                <Image src={data?.image} width={200} height={200} alt={data?.name} className="rounded border-black"/>
                <h1>{data?.name}</h1>
                <div>
                    
                </div>

            </div>
        </div>
    )
}

export default Profile