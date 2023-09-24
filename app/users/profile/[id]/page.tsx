'use client';
import Profile from "@/components/profile/profile";

const ProfilePage = ({params} : any ) => { //Cambiar el any
    const id = params.id
    console.log(id);
    

    return (
        <Profile id={id}/>
    )
}

export default ProfilePage