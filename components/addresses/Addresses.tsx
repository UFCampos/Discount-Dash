"use client";
import { useGetAddressesMutation } from "@/lib/redux/service/addressesAPI";
import { useSelector } from "@/lib/redux/hooks";
import { useState } from "react";
import { useGetUserQuery } from "@/lib/redux/service/usersRegisterAPI";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Addresses = () => {
  const MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

  const [newAddress, setNewAddress] = useState(false);

  const [location, setLocation] = useState({
    lat: -35.37004222477796,
    lng: -64.78490402828068,
    zoom: 5,
  });

  const [address, setAddress] = useState({
    address: "",
    nameAddress: "",
  });
  const [mutate] = useGetAddressesMutation();
  const { id } = useSelector((state) => state.userProfile);

  const { data, isError } = useGetUserQuery({ id });

  const changeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const getAddress = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          zoom: 15,
        });
      });
    }
  };

  const handleClick = async (event) => {
    setLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${event.latLng.lat()},${event.latLng.lng()}&key=${MAPS_API_KEY}`
    );
    const { results } = await response.json();

    setAddress({
      ...address,
      address: results[0].formatted_address,
    });
  };

  const handleAddress = () => {
    setNewAddress(false);
    mutate({
      userId: id,
      address: address.address,
      nameAddress: address.nameAddress,
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          setNewAddress(true);
          getAddress();
        }}
      >
        New Addresses
      </button>
      {newAddress && (
        <div>
          <label htmlFor="address">Name Address: </label>
          <input
            type="text"
            name="nameAddress"
            id="nameAddress"
            onChange={changeAddress}
          />
          <div>
            {location.lat && location.lng && (
              <LoadScript googleMapsApiKey={MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={{ width: "400px", height: "400px" }}
                  center={location}
                  zoom={location.zoom}
                  onClick={handleClick}
                >
                  {location && <Marker position={location} />}
                </GoogleMap>
              </LoadScript>
            )}
          </div>
          <button onClick={handleAddress}>Add Address</button>
        </div>
      )}

      {/* DIRECCIONES GUARDADAS */}
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
