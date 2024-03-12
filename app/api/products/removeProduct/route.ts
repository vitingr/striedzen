import { getInterface } from "@/types/types";
import { prisma } from "@/hooks/prisma";

export const GET = async ({ params }: getInterface) => {
  try {
    await prisma.sliper
      .delete({
        where: {
          id: String(params),
        },
      })
      .then(() => {
        return new Response("O produto foi removido com sucesso!", {
          status: 200,
        });
      })
      .catch((error) => {
        console.log(error);
        return new Response("Não foi possível remover o produto", {
          status: 500,
        });
      });
  } catch (error) {
    console.log(error);
    return new Response("Não foi possível encontrar o produto", {
      status: 404,
    });
  }
};
