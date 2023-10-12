import { NextRequest, NextResponse } from "next/server";
const mercadopago = require("mercadopago");

export const POST = async (req: NextRequest) => {
  mercadopago.configure({
    access_token:
      "TEST-5795284741045386-100410-ebf79903df691500c3fdd563b1702cf0-1498171469",
  });

  let preference;

  const data = await req.json();

  if (Array.isArray(data)) {
    preference = {
      items: data,

      back_urls: {
        success: `https://e20e-2803-9800-9506-8156-8d38-d92c-c85f-f863.ngrok-free.app/notifications/success`,
        failure: `https://e20e-2803-9800-9506-8156-8d38-d92c-c85f-f863.ngrok-free.app/notifications/success`,
        pending: `https://e20e-2803-9800-9506-8156-8d38-d92c-c85f-f863.ngrok-free.app/notifications/success`,
      },
      auto_return: "approved",
    };
  } else {
    const { itemId, description, price, quantity, userCode } = data;
    preference = {
      items: [
        {
          id: itemId,
          title: description,
          unit_price: Number(price),
          quantity: Number(quantity),
        },
      ],
      auto_return: "approved",
      back_urls: {
        success: `https://e20e-2803-9800-9506-8156-8d38-d92c-c85f-f863.ngrok-free.app/notifications/success`,
        failure: `https://e20e-2803-9800-9506-8156-8d38-d92c-c85f-f863.ngrok-free.app/notifications/success`,
        pending: `https://e20e-2803-9800-9506-8156-8d38-d92c-c85f-f863.ngrok-free.app/notifications/success`,
      },
      external_reference: userCode,
    };
  }
  const response = await mercadopago.preferences.create(preference);

  return NextResponse.json({
    id: response.body.id,
  });
};
