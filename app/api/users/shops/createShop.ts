import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

export const controller = async (
  id: string,
  marketName: string,
  typeMarket: string,
  category: string,
  onTheStreet: string,
  phone: string,
  street: string,
  streetNumber: string,
  postalCode: string,
  province: string,
  city: string,
  typePerson: string,
  cuit_cuil: string,
  ownerName: string,
  IVA_condition: string,
  facture_type: string,
  dni: string,
  date: string,
  nationality: string,
  email: string,
  password: string
) => {
  const userRef = doc(db, "users", id);
  setDoc(userRef, {
    marketName,
    typeMarket,
    category,
    onTheStreet,
    phone,
    street,
    streetNumber,
    postalCode,
    province,
    city,
    typePerson,
    cuit_cuil,
    ownerName,
    IVA_condition,
    facture_type,
    dni,
    date,
    nationality,
    email,
    password,
  });
};
