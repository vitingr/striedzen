import { getInterface } from "@/types/types";
import { prisma } from "@/hooks/prisma";

export const GET = async ({ params }: getInterface) => {
  try {
    const product = await prisma.sliper.findUnique({
      where: {
        id: String(params)
      }
    });
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Não foi possível encontrar o produto", {
      status: 500,
    });
  }
};
