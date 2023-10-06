import { NextRequest, NextResponse } from "next/server";
const mercadopago = require("mercadopago");

export const POST = async (req: NextRequest) => {
  mercadopago.configure({
    access_token:
      "TEST-5795284741045386-100410-ebf79903df691500c3fdd563b1702cf0-1498171469",
  });
  const { itemId, description, price, quantity, stock } = await req.json();

  let preference = {
    items: [
      {
        id: itemId,
        title: description,
        unit_price: Number(price),
        quantity: Number(quantity),
      },
    ],

    back_urls: {
      success: `/paid/${itemId}/${Number(stock)}`,
      failure: "/home",
      pending: "/home",
    },
    auto_return: "approved",
  };

  const response = await mercadopago.preferences.create(preference);

  return NextResponse.json({
    id: response.body.id,
  });
};
