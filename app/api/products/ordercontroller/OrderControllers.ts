import { collection,query,where, orderBy,getDocs, OrderByDirection } from "firebase/firestore";
import { db } from "@/firebase/config";
import { log } from "console";

export const getOrders = async (order:string[]) => {
    console.log("**********************************************");

    const name = order[0];
    log(name);
    let price: number = parseInt(order[1]);
    console.log(price);
    const category = order[2];
    
    //let ascOdesc: OrderByDirection | undefined= order[3] as OrderByDirection;
   // log(ascOdesc);

        const productRef = collection(db, "products");
        
       let q = query(productRef, where("category", "==", category));
       let qprice = query(productRef, where("price", "<", price));
       let qfinal



       
    //    if (price !== null && price !== undefined && !isNaN(price)) {
    //      q = query(q, where("price", "<", price));
    //    }

       
    //    if(ascOdesc !== null && ascOdesc !== undefined){
    //     q = query(q, orderBy("price", ascOdesc));
    //    }

          
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map((doc) => doc.data());
        console.log("products:",products);
        return products;
    
  
    

















    // switch (order) {

    //     case "asc":
            
    //         const ascQuery = query(productRef, orderBy("name", order));
    //         try {
    //             const ascSnapshot = await getDocs(ascQuery);
    //             const ascProducts = ascSnapshot.docs.map((doc) => doc.data());
    //             return ascProducts;
    //         } catch (error) {
    //             return error;
    //         }
            
    //     case "desc":
    //         const descQuery = query(productRef, orderBy("name", "desc"));
    //         try {
    //             const descSnapshot = await getDocs(descQuery);
    //             const descProducts = descSnapshot.docs.map((doc) => doc.data());
    //             return descProducts;
    //         } catch (error) {
    //             return error;
    //         }
    //         case "mayor":
    //         const mayorQuery = query(productRef, orderBy("price","desc"));
    //         try {
    //             const mayorSnapshot = await getDocs(mayorQuery);
    //             const mayorProducts = mayorSnapshot.docs.map((doc) => {
    //                 const data = doc.data();
    //                 return data;
                    
    //               });
    //             return mayorProducts;
    //         } catch (error) {
    //             return error;
    //         }
    //         case "menor":
    //         const menorQuery = query(productRef, orderBy("price","asc"));
    //         try {
    //             const menorSnapshot = await getDocs(menorQuery);
    //             const menorProducts = menorSnapshot.docs.map((doc) =>doc.data());
    //             return menorProducts;
    //         } catch (error) {
    //             return error;
    //         }
            
    //     default:
    //         try {
    //             const productsSnapshot = await getDocs(productRef);
    //             const products = productsSnapshot.docs.map((doc) => doc.data());
    //             return products;
    //         } catch (error) {
    //             return error;
    //         }     
    // }
};