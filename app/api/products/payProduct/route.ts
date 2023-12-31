import { NextRequest, NextResponse } from "next/server";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "TEST-4954619061793476-100604-94b7ec6da1dcee7f7e008fe698837e3a-1501138541",
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
            Authorization: `Bearer TEST-4954619061793476-100604-94b7ec6da1dcee7f7e008fe698837e3a-1501138541`,
          },
        }
      );
      const { status, additional_info, external_reference } =
        await paymentInfo.json();

      let userId = external_reference;

      let products = await additional_info?.items;

      if (status === "approved") {
        let arrayProducts = [];
        if (userId.charAt(0) === "-") {
          userId = userId.slice(1);

          await fetch(
            "https://discount-dash-53vw-git-develop-ufcampos.vercel.app/api/cart/delete",
            {
              method: "DELETE",
              body: JSON.stringify({
                userId,
              }),
            }
          );
        }
        for (let item of products) {
          const response = await fetch(
            `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/api/products/${item?.id}`
          );
          const info = await response.json();
          if (info) info.quantity = Number(item?.quantity);

          await arrayProducts.push(info);

          const reference = doc(db, "products", item?.id);
          updateDoc(reference, {
            stock: info?.stock - Number(item.quantity),
          });
        }

        await fetch(
          "https://discount-dash-53vw-git-develop-ufcampos.vercel.app/api/shopOrder/post",
          {
            method: "POST",
            body: JSON.stringify({
              userId,
              arrayProducts,
            }),
          }
        );
      }
    }
    return NextResponse.json({ response: "Data received" });
  } catch (error) {
    return NextResponse.json({ error: "data handling error" }, { status: 400 });
  }
};
