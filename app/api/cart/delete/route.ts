import { NextRequest, NextResponse } from 'next/server';
import { controller } from './deleteItemCart';

export const DELETE = async (req: NextRequest) => {
  
    try {
      const { userId, cartItemId } = await req.json();

      await controller(userId, cartItemId);

      return NextResponse.json({ message: 'Item deleted' });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
  
};





