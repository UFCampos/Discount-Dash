"use client";
import { useGetProfileQuery } from "@/lib/redux/service/searchProfileAPI";
import { Image } from "@nextui-org/react";
import style from "./profile.module.css";

type ProfileProps = {
  id: string;
};

const Profile: React.FC<ProfileProps> = ({ id }) => {
  const { data } = useGetProfileQuery({id})

  return (
    <div className="flex flex-col items-center justify-center border-black">
      <h1>Profile</h1>
            <p>This is the profile page</p>
            <div className={style.container}>
                <div className={style.perfil}>
                    <Image src={data?.photoUrl ? data?.photoUrl : "/default.jpg"} width={350} height={350} alt={data.name} className={style.fotoPerfil}/>
                    <h1 className={style.name}>{data?.name}</h1>
                    <p className={style.email}>{data?.email}</p>
                </div>
                <div className={style.configuracion}>
                    <h2>configuration</h2>
                    <p>segurity</p>
                    <p>pepito</p>
                    <p>pepita</p>
                </div>

            </div>
    </div>
  );
};

export default Profile;
