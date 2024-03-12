import { getInterface } from "@/types/types";
import { prisma } from "@/hooks/prisma";

export const GET = async ({ params }: getInterface) => {
  try {
    const products = await prisma.sliper.findMany();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Não foi possível encontrar nenhum produto", {
      status: 500,
    });
  }
};
