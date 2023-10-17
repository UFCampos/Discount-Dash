import { NextRequest, NextResponse } from "next/server";
import { getFavs } from "./getFavs";

export const GET = async (req: NextRequest) => {
  try {
    let id = req.nextUrl.searchParams.get("id") || "";
    if (!id) {
      return NextResponse.json(
        { message: "Favorite not found" },
        { status: 400 }
      );
    }
    const favoriteProducts = await getFavs(id);
    return NextResponse.json(favoriteProducts);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
