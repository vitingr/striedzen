import { getInterface } from "@/types/types";
import { prisma } from "@/hooks/prisma";

export const POST = async (
  request: Request | any,
  { params }: getInterface
) => {
  const { uuid, name, email, image } = await request.json();

  try {
    const createUser = await prisma.user.create({
      data: {
        uuid: uuid,
        name: name,
        email: email,
        image: image,
      },
    });

    return new Response(JSON.stringify(createUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(
      "ERRO! Não foi possível criar uma conta para esse usuário",
      { status: 500 }
    );
  }
};
