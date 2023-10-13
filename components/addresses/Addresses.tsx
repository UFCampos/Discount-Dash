"use client";
import { useGetAddressesMutation } from "@/lib/redux/service/addressesAPI";
import { useSelector } from "@/lib/redux/hooks";
import { useState } from "react";
import { useGetUserQuery } from "@/lib/redux/service/usersRegisterAPI";

const Addresses = () => {
  const [address, setAddress] = useState({
    address: "",
    nameAddress: "",
  });
  const [mutate] = useGetAddressesMutation();
  const { id } = useSelector((state) => state.userProfile);
  console.log(id);

  const { data, isError } = useGetUserQuery({ id });

  const changeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddress = () => {
    mutate({
      userId: id,
      address: address.address,
      nameAddress: address.nameAddress,
    });
  };

  return (
    <div>
      <h1>New Addresses</h1>
      <label htmlFor="address">Address: </label>
      <input type="text" name="address" id="address" onChange={changeAddress} />
      <label htmlFor="address">Name Address: </label>
      <input
        type="text"
        name="nameAddress"
        id="nameAddress"
        onChange={changeAddress}
      />
      <button onClick={handleAddress}>Add Address</button>
      <div>
        <h1>My Addresses</h1>
        <div>
          {data?.addresses?.map((items: any) => {
            return (
              <div key={items.id}>
                <br />
                {items.address}
                <br />
                {items.nameAddress}
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Addresses;
