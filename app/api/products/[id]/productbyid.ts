import { Firestore } from "firebase/firestore";
import { collection, doc,getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";



export const productById = async (id: string) => {
console.log("el id llego", db);
    try{
        // creamos referencia al documento con el id que nos pasan
        const docRef = db.collection("products").doc(id);
        // obtenemos los datos del documento
        const productDoc = await getDoc(docRef);
        // si el documento existe devolvemos los datos
        if (productDoc.exists()) {
            return productDoc.data();
        } else {
            // si no existe devolvemos un error
            return {error: "Product not found" , status: 404};
        }
    }catch(error){
        return {error: "error al obter el producto", status: 500};
    }
};



