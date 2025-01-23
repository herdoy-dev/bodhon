import { prisma } from "@/prisma/client";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const GET = async (request: NextRequest) => {
  const { email } = await request.json();
  const users = await prisma.user.findMany({
    where: {
      NOT: {
        email,
      },
    },
  });

  return NextResponse.json(users);
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validationResult = validateUser(body);
  if (!validationResult.success) {
    return NextResponse.json(validationResult.error.errors[0].message, {
      status: 400,
    });
  }

  const { name, email, password } = body;

  // Check if the user already exists
  const checkDuplicate = await prisma.user.findUnique({ where: { email } });
  if (checkDuplicate) {
    return NextResponse.json("User already exists", { status: 400 });
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user
  const newUser = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });

  return NextResponse.json(newUser, { status: 201 });
};

interface UserInterface {
  name: string;
  email: string;
  password: string;
}

const validateUser = (user: UserInterface) => {
  const userSchema = z.object({
    name: z.string().min(1, "Name is required").max(255, "Name is too long"),
    email: z
      .string()
      .email("Invalid email format")
      .min(1, "Email is required")
      .max(255, "Email is too long"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(10000, "Password is too long"),
  });

  return userSchema.safeParse(user);
};
