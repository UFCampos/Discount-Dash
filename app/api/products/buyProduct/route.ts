import { NextRequest, NextResponse } from "next/server";
const mercadopago = require("mercadopago");

//! ESTA RUTA ESTA HECHA PARA CUANDO RECIBE 1 SOLO PRODUCTO. POR EL MOMENTO...

export const POST = async (req: NextRequest) => {
  mercadopago.configure({
    access_token: "ACCESS_TOKEN",
  });
  const { itemId, description, price, quantity } = await req.json();

  let preference = {
    items: [
      {
        title: description,
        unit_price: Number(price),
        quantity: Number(quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:3000/home",
      failure: "http://localhost:3000/home",
      pending: "http://localhost:3000/home",
    },
    auto_return: "approved",
  };

  const response = await mercadopago.preferences.create(preference);

  return NextResponse.json({
    id: response.body.id,
  });
};
