import { type NextRequest, NextResponse } from "next/server";
const mercadopago = require("mercadopago");

export const POST = async (req: NextRequest) => {
  mercadopago.configure({
    access_token: "TEST-4954619061793476-100604-94b7ec6da1dcee7f7e008fe698837e3a-1501138541",
  });

  let preference;

  const data = await req.json();
  if (Array.isArray(data)) {
    preference = {
      items: data,

      back_urls: {
        success: `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/notifications/success`,
        failure: `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/notifications/success`,
        pending: `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/notifications/success`,
      },
      auto_return: "approved",
    };
  } else {
    const { itemId, description, price, quantity } = data;

    preference = {
      items: [
        {
          id: itemId,
          title: description,
          unit_price: Number(price),
          quantity: Number(quantity),
        },
      ],

      back_urls: {
        success: `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/notifications/success`,
        failure: `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/notifications/success`,
        pending: `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/notifications/success`,
      },
      auto_return: "approved",
    };
  }

  const response = await mercadopago.preferences.create(preference);

  return NextResponse.json({
    id: response.body.id,
  });
};
