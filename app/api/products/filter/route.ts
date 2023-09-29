import { db } from "@/firebase/config";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { Categories } from "@/utils/types";
export const filters = async (
  categories: Categories,
  order: string,
  establecimiento: string,
  price: string,
  category: string
) => {
  let filteredQuery = query(collection(db, "products"));

  if (category) {
    filteredQuery = query(filteredQuery, where("category", "==", category));
  }

  if (establecimiento) {
    filteredQuery = query(
      filteredQuery,
      where("establecimiento", "==", establecimiento)
    );
  }
  if (price) {
    const numbers = price.split("-");
    const min = parseInt(numbers[0]);
    const max = parseInt(numbers[1]);
    filteredQuery = query(
      filteredQuery,
      where("price", ">=", min),
      where("price", "<=", max)
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
      filteredQuery = query(filteredQuery, orderBy("name", order));
      break;
    default:
      filteredQuery;
  }
  await getDocs(filteredQuery);
  return filteredQuery;
};
