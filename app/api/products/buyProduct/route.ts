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
      success: `https://a1a0-2803-9800-9506-8156-fd42-e4da-8601-e34c.ngrok-free.app//notifications/success`,
      failure: `https://a1a0-2803-9800-9506-8156-fd42-e4da-8601-e34c.ngrok-free.app//notifications/success`,
      pending: `https://a1a0-2803-9800-9506-8156-fd42-e4da-8601-e34c.ngrok-free.app//notifications/success`,
    },
    auto_return: "approved",
    notification_url:
      "https://a1a0-2803-9800-9506-8156-fd42-e4da-8601-e34c.ngrok-free.app/api/products/payProduct",
  };

  const response = await mercadopago.preferences.create(preference);

  return NextResponse.json({
    id: response.body.id,
  });
};
