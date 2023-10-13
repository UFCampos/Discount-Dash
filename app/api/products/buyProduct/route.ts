import { type NextRequest, NextResponse } from "next/server";
const mercadopago = require("mercadopago");

export const POST = async (req: NextRequest) => {
  mercadopago.configure({
    access_token: "ACCESS_TOKEN",
  });

  let preference;

  const data = await req.json();

  if (Array.isArray(data)) {
    const response = await fetch(
      `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/api/cart?id=${data[0]}`
    );

    const productsCart = await response.json();

    const products = productsCart.map((product) => ({
      id: product.id,
      title: product.name,
      unit_price: Number(product.price),
      quantity: Number(product.quantity),
    }));

    preference = {
      items: products,
      auto_return: "approved",
      back_urls: {
        success: `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/notifications/success`,
        failure: `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/notifications/success`,
        pending: `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/notifications/success`,
      },
      external_reference: data[0],
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
        success: `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/notifications/success`,
        failure: `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/notifications/success`,
        pending: `https://discount-dash-53vw-git-develop-ufcampos.vercel.app/notifications/success`,
      },
      external_reference: userCode,
    };
  }
  const response = await mercadopago.preferences.create(preference);

  return NextResponse.json({
    id: response.body.id,
  });
};
