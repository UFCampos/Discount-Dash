import { NextResponse, NextRequest } from "next/server";
import { collection, getDocs} from "firebase/firestore";
import { db } from "@/firebase/config";
import { productByName } from "./productByName";
import { getOrders } from "./ordercontroller/OrderControllers";
import { get } from "http";

export const GET = async (req: NextRequest) => {
  console.log("**********************************************");

  let name = req.nextUrl.searchParams.get("name")||"" ;
  let price = req.nextUrl.searchParams.get("price")||"" ;
  let category = req.nextUrl.searchParams.get("category")||"" ;
  let order = req.nextUrl.searchParams.get("order")||"" ;
  let loquellegaporparams = [name , price , category, order];

  // enviamos por getorders lo que llega por parametro
  let response = await getOrders(loquellegaporparams);



  // Crear un array de lo que me llega poraprametro
 // const responseObj = [ name, order,categoria ];
  // Enviar el objeto como respuesta JSON
 // return NextResponse.json(responseObj);

  


//   const name = req.nextUrl.searchParams.get("name")||"" ;
//   const order = req.nextUrl.searchParams.get("order")||"";
// console.log("name:",name + "order:",order);
  
//   let response;
//   switch (true) {
//     case !!order:
//       response = await getOrders(order);
//       break;

//     case !!name:
//       const productResponse = await productByName(name);
//       if ('error' in productResponse) {
//         return NextResponse.json({ error: productResponse.error }, { status: productResponse.status });
//       }
//       response = productResponse;
//       break;
// // por default si no hay nombre ni orden devuelve todos los productos
//     default:
//       const productsSnapshot = await getDocs(collection(db, "products"));
//       const products = productsSnapshot.docs.map((doc) => doc.data());
//       response = products;
//       break;
//  
  return NextResponse.json(response);

}








  // if (order) {
  //   await getOrders(order);
  // }
  // if (name) {
  //   const response = await productByName(name);
  //   if ('error' in response){
  //     return NextResponse.json({ error: response.error }, {status: response.status});
  //   }
  //   return NextResponse.json(response);
  // };
  // const productsSnapshot = await getDocs(collection(db, "products"));
  // const products = productsSnapshot.docs.map((doc) => doc.data());
  // return NextResponse.json(products);
  // }
  
