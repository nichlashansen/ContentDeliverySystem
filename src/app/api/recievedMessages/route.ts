import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  if (userId == null || userId == undefined) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const recievedMessages = await prisma.message.findMany({
    where: {
      recieverId: userId,
    },
  });
  return NextResponse.json(recievedMessages);
}

export async function POST(request: Request) {}
