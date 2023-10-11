import { NextRequest, NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "TEST-5795284741045386-100410-ebf79903df691500c3fdd563b1702cf0-1498171469",
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
            Authorization: `Bearer TEST-5795284741045386-100410-ebf79903df691500c3fdd563b1702cf0-1498171469`,
          },
        }
      );
      const { status, additional_info } = await paymentInfo.json();
      let products = await additional_info?.items;

      let arrayProducts = [];

      if (status === "approved") {
        for (let item of products) {
          const reference = doc(db, "products", item?.id);
          const productDB = await getDoc(reference);
          const info = productDB.data();
          await arrayProducts.push(productDB.data());

          updateDoc(reference, {
            stock: info?.stock - Number(item.quantity),
          });
        }
      }
      await fetch(
        "https://f712-2803-9800-9506-8156-6516-aac9-334-e5e9.ngrok-free.app/api/shopOrder/QVfzr4yYV",
        {
          method: "POST",
          body: JSON.stringify({
            arrayProducts,
          }),
        }
      );
    }
    return NextResponse.json({ response: "Data received" });
  } catch (error) {
    return NextResponse.json({ error: "data handling error" }, { status: 400 });
  }
};
