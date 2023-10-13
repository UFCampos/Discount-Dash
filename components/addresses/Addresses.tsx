'use client'
import { useGetAddressesMutation } from "@/lib/redux/service/addressesAPI";
import { useSelector } from "@/lib/redux/hooks";

const Addresses = () => {
    const [mutate] = useGetAddressesMutation();
    const userProfile = useSelector((state) => state.userProfile);


    return (
        <div>
            <h1>My Addresses</h1>
        </div>
    );
}

export default Addresses