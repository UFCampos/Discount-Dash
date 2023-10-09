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
  const id = req.nextUrl.searchParams.get("id");
  console.log("Mi payment id", id);

  try {
    const paymentInfo = await fetch(
      `https://api.mercadopago.com/v1/payments/${id}`,
      {
        method: "get",
        headers: {
          Authorization: `Bearer TEST-5795284741045386-100410-ebf79903df691500c3fdd563b1702cf0-1498171469`,
        },
      }
    );
    console.log(await paymentInfo.json());

    const { status, additional_info } = await paymentInfo.json();

    if (status === "approved") {
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
    }
    return NextResponse.json(
      { response: "conexion realizada con exito" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "error al recibir el payment-id" },
      { status: 400 }
    );
  }
};
