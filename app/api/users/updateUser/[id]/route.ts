import { NextRequest, NextResponse } from "next/server";
import { updateUser } from "./updateUser";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  const { name, lastname, email } = await req.json();
  if (!id || !name || !lastname || !email) {
    return NextResponse.json({ error: "Insufficient data" }, { status: 400 });
  }
  const response = await updateUser(id, name, lastname, email);
  if ("error" in response) {
    return NextResponse.json(response);
  }
  return NextResponse.json({ message: "User updated" });
};
