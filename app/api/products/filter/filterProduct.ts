import { db } from "@/firebase/config";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { Categories } from "@/utils/types";
export const filters = async (
    name: string,
    order: string,
    storeType: string,
    price: string,
    category: string
) => {
  let filteredQuery = query(collection(db, "products"));

  if (name !== "") {
    filteredQuery = query(filteredQuery, where("nameToLowerCase", ">=", name.toLowerCase()), where("nameToLowerCase", "<=", name.toLowerCase() + "\uf8ff"));
  }

  if (category !== "") {
    filteredQuery = query(filteredQuery, where("category", "==", category));
  }

  if (storeType !== "") {
    filteredQuery = query(
      filteredQuery,
      where("establecimiento", "==", storeType)
    );
  }
  if (price !== "") {
    const numbers = price.split("-");
    const min = parseInt(numbers[0]);
    const max = parseInt(numbers[1]);
    filteredQuery = query(
      filteredQuery,
      where("price", ">=", min-1),
      where("price", "<=", max+1)
    );
  }

  switch (order) {
    case "higher":
      filteredQuery = query(filteredQuery, orderBy("price", "desc"));
      break;
    case "lower":
      filteredQuery = query(filteredQuery, orderBy("price", "asc"));
      break;
    case "asc":
    case "desc":
      filteredQuery = query(filteredQuery, orderBy("price", "asc"), orderBy("nameToLowerCase", order));
      break;
    default:
      filteredQuery;
  }
  return filteredQuery;
};