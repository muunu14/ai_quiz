import { NextResponse } from "next/server";
import prisma from "../lib/prisma";

export async function POST(req: Request) {
  try {
    const user = await prisma.user.create({
      data: {
        email: "test1@test.com",
        id: "2",
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 },
    );
  }
}
