import { getInterface } from "@/types/types";
import { prisma } from "@/hooks/prisma";

export const GET = async ({ params }: getInterface) => {
  try {
      return new Response();
  } catch (error) {
    console.log(error);
    return new Response("Não foi possível encontrar o usuário", {
      status: 500,
    });
  }
};
