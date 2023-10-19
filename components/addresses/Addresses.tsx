"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useGetAddressesMutation } from "@/lib/redux/service/addressesAPI";
import { useSelector } from "@/lib/redux/hooks";
import { useState, useEffect } from "react";
import { useGetUserQuery } from "@/lib/redux/service/usersRegisterAPI";
import style from "./addresses.module.css";

interface locationData {
  lat: number;
  lng: number;
  zoom?: number;
}

const Addresses = () => {
  const [address, setAddress] = useState({
    address: "",
    nameAddress: "",
  });

  const [location, setLocation] = useState<locationData>({
    lat: -35.37004222477796,
    lng: -64.78490402828068,
    zoom: 5,
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

  const handleClick = async (event: any) => {
    setLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const handleAddress = () => {
    mutate({
      userId: id,
      address: address.address,
      nameAddress: address.nameAddress,
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            zoom: 15,
          });
        }
        /* (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            console.log("Haga click en la ubicacion a agregar");
          }
        } */
      );
    }
  }, []);

  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=AIzaSyAyQi8VYe9q2NLrTrgH5696Ma5fI9vcxis`
    )
      .then((response) => response.json())
      .then(({ results }) => {
        console.log(results);
        setAddress({
          ...address,
          address: results[0].formatted_address,
        });
      });
  }, [location]);

  console.log(data);

  return (
    <main className={style.cont}>
      <div className={style.createCont}>
        <form className={style.form}>
          <p className={style.formTitle}>Add new Address</p>
          <div className={style.inputContainer}>
            <input
              type="text"
              placeholder="Add name to address"
              id="nameAddress"
              name="nameAddress"
              onChange={changeAddress}
              className={style.input}
            />
          </div>
          <div className={style.inputContainer}>
            <input
              type="text"
              placeholder="Enter your address"
              id="address"
              name="address"
              onChange={changeAddress}
              className={style.input}
              value={address.address}
            />
          </div>
          <div className={style.mapCont}>
            {location.lat && location.lng && (
              <LoadScript googleMapsApiKey="AIzaSyAyQi8VYe9q2NLrTrgH5696Ma5fI9vcxis">
                <GoogleMap
                  mapContainerStyle={{ width: "300px", height: "200px" }}
                  center={location}
                  zoom={location.zoom}
                  onClick={handleClick}
                >
                  {location && <Marker position={location} />}
                </GoogleMap>
              </LoadScript>
            )}
          </div>
          <button onClick={handleAddress} className={style.submit}>
            add
          </button>
        </form>
      </div>
      <div className={style.locations}>
        <div className={style.titleCont}>
          <h1>Your Locations</h1>
        </div>
        <section className={style.address}>
          {data?.addresses &&
            data?.addresses.map((item: any) => {
              return (
                <div key={item.id} className={style.addressItem}>
                  <p>
                    {item.nameAddress}:{" "}
                    <span className={style.span}>{item.address}</span>
                  </p>
                </div>
              );
            })}
        </section>
      </div>
    </main>
  );
};

export default Addresses;
