"use client";
import { useGetProfileQuery } from "@/lib/redux/service/searchProfileAPI";
import { Image } from "@nextui-org/react";
import style from "./profile.module.css";
import { useSelector } from "@/lib/redux/hooks";
import Link from "next/link";

type ProfileProps = {
  id: string;
};

const Profile: React.FC<ProfileProps> = ({ id }) => {
  const { data, isError } = useGetProfileQuery({ id });
  const user = useSelector((state) => state.userProfile);

  if (isError) {
    return (
      <section className="pt-16 bg-blueGray-50">
        <div className="w-full lg:w-4/12 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16 shadow-pink-400">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                  <div className="relative  items-center flex">
                    <Link href="/profile">
                      <Image
                        alt="img"
                        src={user?.photoUrl ? user?.photoUrl : "/default.jpg"}
                        width={300}
                        height={300}
                        className="shadow-xl rounded-full h-auto align-middle border-none w-40 -mt-20  "
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                  {user?.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {user?.email}
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  info
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      configuration
                    </p>
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      segurity
                    </p>
                    <Link href={`/users/profile/${user.id}/updatePassword`}>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Change password
                      </p>
                    </Link>
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      pepita
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-16 bg-blueGray-50">
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16 shadow-pink-400">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative  items-center flex">
                  <Image
                    alt="img"
                    src={data?.photoUrl ? data?.photoUrl : "/default.jpg"}
                    width={300}
                    height={300}
                    className="shadow-xl rounded-full h-auto align-middle border-none w-40 -mt-20  "
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                {data?.name}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                {data?.email}
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                info
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    configuration
                  </p>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    segurity
                  </p>
                  <Link href={`/users/profile/${user.id}/updatePassword`}>
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Change password
                    </p>
                  </Link>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    pepita
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
