/*import { controller } from "./deleteItemCart";
import { NextResponse, NextRequest } from "next/server";

export const DELETE = async (req: NextRequest) => {
  const {idUser, idItem} = await req.json();
  try {
    await controller(idUser, idItem);
    return NextResponse.json({ message: "Item deleted" });
  } catch (error) {
    throw error
  }
};*/
import { NextRequest, NextResponse } from 'next/server';
import { controller } from './deleteItemCart';

export const DELETE = async (req: NextRequest) => {
  
    try {
      const { userId, cartItemId } = await req.json();

      await controller(userId, cartItemId);

      return NextResponse.json({ message: 'Item deleted' });
    } catch (error) {
      return NextResponse.error();
    }
  
};





