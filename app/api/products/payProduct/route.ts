import { NextRequest, NextResponse } from "next/server";
import { collection, doc, setDoc } from "firebase/firestore";
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
            method: "get",
            headers: {
              Authorization: `Bearer TEST-5795284741045386-100410-ebf79903df691500c3fdd563b1702cf0-1498171469`,
            },
          }
        );

        console.log("RESPONSE", await paymentInfo.json());
      }

      /* 
      if (status === "approved") {
        console.log(await additional_info?.items);
        await Promise.all(
          additional_info?.items.forEach((item: any) => {
            let id: string = item.id;
            const reference = doc(collection(db, "products", id));

            setDoc(reference, {
              stock: FieldValue.increment(-1),
            });
          })
        );
      } */
    }, 1000);

    /* const { status, additional_info } = await paymentInfo.json(); */

    /* if (status === "approved") {
      console.log(await additional_info?.items);
      await Promise.all(
        additional_info?.items.map(async (item) => {
          let id: string = item.id;
          const reference = doc(collection(db, "products", id));
5031 7557 3453 0604
          await setDoc(reference, {
            stock: FieldValue.increment(-1),
          });
        })
      );
    } */
    return NextResponse.json({ saludo: "hola" });
  } catch (error) {
    return NextResponse.json(
      { error: "error al recibir el payment-id" },
      { status: 400 }
    );
  }
};
