import { db } from "@/firebase/config";
import { doc, updateDoc, getDoc } from "firebase/firestore";

export const updateName = async (id: string, name: string) => {
  const docRef = doc(db, "users", id);

  await updateDoc(docRef, {
    name: name,
  });
};

export const updateLastname = async (id: string, lastname: string) => {
  const docRef = doc(db, "users", id);
  await updateDoc(docRef, {
    lastname: lastname,
  });
};

export const updateEmail = async (id: string, email: string) => {
  const docRef = doc(db, "users", id);

  await updateDoc(docRef, {
    email: email,
  });
};

export const updateAddress = async (
  id: string,
  address: string,
  nameAddress: string
) => {
  const docRef = doc(db, "users", id);

  const userDoc = await getDoc(docRef);

  if (userDoc.exists()) {
    const userData = userDoc.data();

    const addresses = userData.addresses || [];

    const existingAddress = addresses.find(
      (obj: { nameAddress: string }) => obj.nameAddress === nameAddress
    );

    if (existingAddress) {
      existingAddress.address = address;
    } else {
      addresses.push({ nameAddress, address });
    }

    await updateDoc(docRef, { addresses });
  }
};

export const updateImage = async (id: string, image: string) => {
  const docRef = doc(db, "users", id);

  await updateDoc(docRef, {
    image: image,
  });
};
