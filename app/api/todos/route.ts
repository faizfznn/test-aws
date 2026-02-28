export const dynamic = "force-dynamic"; // Tambahkan ini

import { NextResponse } from "next/server";
// ...existing code...
import { prisma } from "@/lib/prisma"; // Ganti import PrismaClient dengan instance shared

// Hapus baris ini: const prisma = new PrismaClient();

export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const { task } = await request.json();
  const newTodo = await prisma.todo.create({
    data: { task },
  });
  return NextResponse.json(newTodo);
}
