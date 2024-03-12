import { getInterface } from "@/types/types";
import { prisma } from "@/hooks/prisma";

export const POST = async (
  request: Request | any,
  { params }: getInterface
) => {
  const { title, description, brand, price, image, slug, units } =
    await request.json();
  try {
    const createProduct = await prisma.sliper.create({
      data: {
        title: title,
        description: description,
        brand: brand,
        price: price,
        image: image,
        slug: slug,
        units: units,
      },
    });

    return new Response(JSON.stringify(createProduct), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Não foi possível encontrar o usuário", {
      status: 500,
    });
  }
};
