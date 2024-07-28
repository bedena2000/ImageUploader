import { prismaClient } from "@/prisma";

export async function GET() {
  const images = await prismaClient.image.findMany();
  return Response.json({ message: "Hello World", images });
}
