import { NextRequest, NextResponse } from "next/server";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { FieldValue } from "firebase-admin/firestore";
const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token:
    "TEST-4954619061793476-100604-94b7ec6da1dcee7f7e008fe698837e3a-1501138541",
});

export const POST = async (req: NextRequest) => {
  console.log(
    "RECORDAR QUE LUEGO DE PROBAR SI FUNCIONA HAY QUE METER TODO ESTO EN UN -IF-"
  );

  const id = req.nextUrl.searchParams.get("id");
  console.log("Mi payment id", id);

  try {
    const paymentInfo = await fetch(
      `https://api.mercadopago.com/v1/payments/${id}`,
      {
        method: "get",
        headers: {
          Authorization: `Bearer TEST-4954619061793476-100604-94b7ec6da1dcee7f7e008fe698837e3a-1501138541`,
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

      return NextResponse.json({ saludo: "hola" });
    }
    return NextResponse.json({ res: "D" });
  } catch (error) {
    return NextResponse.json({ saludo: "chau" }, { status: 400 });
  }
};
