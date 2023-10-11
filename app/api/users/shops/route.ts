import {type NextRequest, NextResponse} from 'next/server';
import {controller} from './createShop';
export const POST = async (req: NextRequest) => {
  try {
    const {
      id,
      marketName,
      typeMarket,
      category,
      onTheStreet,
      phone,
      street,
      streetNumber,
      postalCode,
      province,
      city,
      typePerson,
      cuit_cuil,
      ownerName,
      IVA_condition,
      facture_type,
      dni,
      date,
      nationality,
      email,
      password,
    } = await req.json();
    if (
      !id ||
      !marketName ||
      !email ||
      !typeMarket ||
      !category ||
      !onTheStreet ||
      !phone ||
      !street ||
      !streetNumber ||
      !postalCode ||
      !province ||
      !city ||
      !typePerson ||
      !cuit_cuil ||
      !ownerName ||
      !IVA_condition ||
      !facture_type ||
      !dni ||
      !date ||
      !nationality ||
      !password
    ) {
      return NextResponse.json({ error: "Insufficient data" }, { status: 400 });
    }
    controller(
      id,
      marketName,
      typeMarket,
      category,
      onTheStreet,
      phone,
      street,
      streetNumber,
      postalCode,
      province,
      city,
      typePerson,
      cuit_cuil,
      ownerName,
      IVA_condition,
      facture_type,
      dni,
      date,
      nationality,
      email,
      password
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
