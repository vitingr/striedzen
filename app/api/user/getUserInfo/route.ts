import { getInterface } from "@/types/types";
import { prisma } from "@/hooks/prisma";

export const GET = async ({ params }: getInterface) => {
  try {
    const userData = await prisma.user.findFirst({
      where: {
        uuid: params,
      },
    });
    if (userData) {
      return new Response(JSON.stringify(userData), { status: 200 });
    } else {
      return new Response("Usuário não cadastrado", { status: 404 });
    }
  } catch (error) {
    return new Response("Não foi possível encontrar o usuário", {
      status: 500,
    });
  }
};
