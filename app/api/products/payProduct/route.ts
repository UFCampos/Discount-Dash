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
      const { status, additional_info, external_reference } =
        await paymentInfo.json();

      let products = await additional_info?.items;

      let arrayProducts = [];

      if (status === "approved") {
        await fetch(
          "https://discount-dash-53vw-git-develop-ufcampos.vercel.app/api/cart/delete",
          {
            method: "DELETE",
            body: JSON.stringify({
              userId: external_reference,
            }),
          }
        );
        for (let item of products) {
          const reference = doc(db, "products", item?.id);
          const productDB = await getDoc(reference);
          const info = await productDB.data();
          if (info) {
            info.id = item?.id;
            info.quantity = Number(item?.quantity);
          }
          await arrayProducts.push(info);

          updateDoc(reference, {
            stock: info?.stock - Number(item.quantity),
          });
        }
      }

      await fetch(
        "https://discount-dash-53vw-git-develop-ufcampos.vercel.app/api/shopOrder/post",
        {
          method: "POST",
          body: JSON.stringify({
            userId: external_reference,
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
