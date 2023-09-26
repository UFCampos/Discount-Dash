import { Firestore } from "firebase/firestore";
import { collection, doc,getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";



export const productById = async (id: string) => {
    console.log("++++++++++++++++++++++++++++++++++++++");
    try{
        // creamos referencia al documento con el id que nos pasan
        const docRef = doc(db, "products", id);
        // obtenemos los datos del documento
        const productDoc = await getDoc(docRef);
        // si el documento existe devolvemos los datos
        if (productDoc.exists()) {
            const productData = productDoc.data();
            const productWithId = {
                id: productDoc.id,  // Agrega el ID
                ...productData    // Agrega los datos del documento
            };

            console.log(productWithId);
            return productWithId;

            
        } else {
            // si no existe devolvemos un error
            return {error: "Product not found" , status: 404};
        }
    }catch(error){
        return {error: "error al obter el producto", status: 500};
    }
};




