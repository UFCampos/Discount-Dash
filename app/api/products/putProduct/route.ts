import { NextResponse, NextRequest } from "next/server";
import {
  putName,
  putBrand,
  putPrice,
  putExpiration,
  putStock,
  putNormalPrice,
  putImage,
  putDescription,
  putCategory
} from "./updateAll/productAll";
export const PUT = async (req: NextRequest) => {
  try {
    let productId = req.nextUrl.searchParams.get("id") || "";
    let name = req.nextUrl.searchParams.get("name") || "";
    let brand = req.nextUrl.searchParams.get("brand") || "";
    let price = req.nextUrl.searchParams.get("price") || "";
    let expiration = req.nextUrl.searchParams.get("expiration") || "";
    let stock = req.nextUrl.searchParams.get("stock") || "";
    let normalPrice = req.nextUrl.searchParams.get("normalPrice") || "";
    let category = req.nextUrl.searchParams.get("category") || "";
    let image = req.nextUrl.searchParams.get("image") || "";
    let description = req.nextUrl.searchParams.get("description") || "";
    if (name) {
      await putName(name, productId);
    }
    if (brand) {
      await putBrand(brand, productId);
    }
    if (price) {
      await putPrice(price, productId);
    }
    if (expiration) {
      await putExpiration(expiration, productId);
    }
    if (stock) {
      await putStock(stock, productId);
    }
    if (normalPrice) {
      await putNormalPrice(normalPrice, productId);
    }
    if (category) {
      await putCategory(category, productId);
    }
    if (image) {
      await putImage(image, productId);
    }
    if (description) {
      await putDescription(description, productId);
    }
    return NextResponse.json({ message: "Product updated" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
