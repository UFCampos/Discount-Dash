import { NextRequest, NextResponse } from "next/server";
const mercadopago = require("mercadopago");

export const POST = async (req: NextRequest) => {
  mercadopago.configure({
    access_token:
      "TEST-5795284741045386-100410-ebf79903df691500c3fdd563b1702cf0-1498171469",
  });

  const { itemId, description, price, quantity } = await req.json();

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
      success: `https://e880-2803-9800-9506-8156-1808-4943-b100-6a32.ngrok-free.app/notifications/success`,
      failure: `https://e880-2803-9800-9506-8156-1808-4943-b100-6a32.ngrok-free.app/notifications/success`,
      pending: `https://e880-2803-9800-9506-8156-1808-4943-b100-6a32.ngrok-free.app/notifications/success`,
    },
    auto_return: "approved",
  };

  const response = await mercadopago.preferences.create(preference);

  return NextResponse.json({
    id: response.body.id,
  });
};
