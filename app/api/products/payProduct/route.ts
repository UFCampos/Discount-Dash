import { NextRequest, NextResponse } from "next/server";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { FieldValue } from "firebase-admin/firestore";
const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "TEST-5795284741045386-100410-ebf79903df691500c3fdd563b1702cf0-1498171469",
});

export const POST = async (req: NextRequest) => {
  const { data } = await req.json();
  const id = data?.id;
  console.log("data.id:", id);

  try {
    setTimeout(async () => {
      if (id !== undefined) {
        let paymentInfo = await fetch(
          `https://api.mercadopago.com/v1/payments/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer TEST-5795284741045386-100410-ebf79903df691500c3fdd563b1702cf0-1498171469`,
            },
          }
        );

        const { status, additional_info } = await paymentInfo.json();
        let products = await additional_info?.items;
        console.log("Productos comprados: ", products);
        /* const array = []; */
        if (status === "approved") {
          products.forEach(async (item: any) => {
            console.log(item.id);

            const reference = await doc(db, "products", item?.id);

            updateDoc(reference, {
              stock: 100,
            });
          });
        }
      }
    }, 1000);

    /* const { status, additional_info } = await paymentInfo.json(); */

    /* if (status === "approved") {
      console.log(await additional_info?.items);
      await Promise.all(
        additional_info?.items.map(async (item) => {
          let id: string = item.id;
          const reference = doc(collection(db, "products", id));

          await setDoc(reference, {
            stock: FieldValue.increment(-1),
          });
        })
      );
    } */
    return NextResponse.json({ saludo: "hola" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "error al recibir el payment-id" },
      { status: 400 }
    );
  }
};
