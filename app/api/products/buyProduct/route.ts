import { NextRequest, NextResponse } from "next/server";
const mercadopago = require("mercadopago");

export const POST = async (req: NextRequest) => {
  mercadopago.configure({
    access_token:
      "TEST-5795284741045386-100410-ebf79903df691500c3fdd563b1702cf0-1498171469",
  });
  const productsReceived = await req.json();

  let preference = {
    items: productsReceived,

    back_urls: {
      success: "/notifications/success",
      failure: "/notifications/success",
      pending: "/notifications/success",
    },
    auto_return: "approved",
  };

  const response = await mercadopago.preferences.create(preference);

  return NextResponse.json({
    id: response.body.id,
  });
};
