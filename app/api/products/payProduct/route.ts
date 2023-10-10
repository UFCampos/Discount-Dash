import { NextRequest, NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token: "ACCESS_TOKEN",
});

export const POST = async (req: NextRequest) => {
  const { data } = await req.json();
  const id = data?.id;

  try {
    if (id !== undefined) {
      let paymentInfo = await fetch(
        `https://api.mercadopago.com/v1/payments/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ACCESS_TOKEN`,
          },
        }
      );
      const { status, additional_info } = await paymentInfo.json();
      let products = await additional_info?.items;

      if (status === "approved") {
        products.forEach(async (item: any) => {
          const reference = doc(db, "products", item?.id);
          const productDB = await getDoc(reference);
          const info = productDB.data();

          updateDoc(reference, {
            stock: info?.stock - Number(item.quantity),
          });
        });
      }
    }
    return NextResponse.json({ response: "Data received" });
  } catch (error) {
    return NextResponse.json({ error: "data handling error" }, { status: 400 });
  }
};
