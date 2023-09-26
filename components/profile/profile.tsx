'use client'
import { useGetProfileQuery } from "@/lib/redux/service/searchProfileAPI"
import { useSelector } from "@/lib/redux/hooks"
import { Image } from "@nextui-org/react"

type ProfileProps = {
    id : string
}

const Profile: React.FC<ProfileProps> = ({id}) => {

    // const { data } = useGetProfileQuery({id})
    const data = {
        name: "Juan",
        image: "/henry.jpg",
    }

    const {email, name, photoUrl } = useSelector(state => state.userProfile)


    return(
    <div className="flex flex-col items-center justify-center border-black">
            <h1>Profile</h1>
            <p>This is the profile page</p>
            <div>
                <Image src={photoUrl ? photoUrl : data.image} width={200} height={200} alt={data?.name} className="rounded border-black"/>
                <h1>{name}</h1>
                <p>{email}</p>
                <div>
                    
                </div>

            </div>
        </div>
    )
}

export default Profile