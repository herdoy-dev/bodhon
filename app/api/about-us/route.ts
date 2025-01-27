import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await prisma.aboutUs.findMany();
    return NextResponse.json(data[0], { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went worn" + error },
      { status: 500 }
    );
  }
};

export const PUT = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { id, title, description } = body;
    const data = await prisma.aboutUs.update({
      where: { id },
      data: { title, description },
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went worn" + error },
      { status: 500 }
    );
  }
};
