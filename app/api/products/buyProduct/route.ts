import { NextRequest, NextResponse } from "next/server";
const mercadopago = require("mercadopago");

export const POST = async (req: NextRequest) => {
  mercadopago.configure({
    access_token:
      "TEST-4954619061793476-100604-94b7ec6da1dcee7f7e008fe698837e3a-1501138541",
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
      success: `${process.env.SUCCES_ROUTE}`,
      failure: `${process.env.SUCCES_ROUTE}`,
      pending: `${process.env.SUCCES_ROUTE}`,
    },
    auto_return: "approved",
  };

  const response = await mercadopago.preferences.create(preference);

  return NextResponse.json({
    id: response.body.id,
  });
};
