import CtaButton from "@/components/Buttons/CtaButton";
import ProductCard from "@/components/Cards/ProductCard";
import Footer from "@/components/Footer";
import HomeListNavbar from "@/components/HomeListNavbar";
import Navbar from "@/components/Navbar";
import SeeMore from "@/components/SeeMore";
import { PRODUCTS_DATA } from "@/constants/products-data";
import { ProductProps } from "@/types/types";
import { getProductsData } from "@/utils/getProducts";
import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

export default async function Home() {
  // const productData = await getProductsData();
  const productData = PRODUCTS_DATA 

  return (
    <>
      <Navbar />
      <HomeListNavbar />
      <main className="min-h-[62vh] w-full lg:py-20 py-32 flex flex-col items-center">
        <section className="w-full max-w-6xl flex lg:flex-nowrap flex-wrap justify-between lg:py-20 py-12 lg:px-12 px-4">
          <div className="w-full flex justify-center items-center">
            <article className="flex flex-col lg:items-start items-center gap-y-2">
              <span className="text-sm lg:text-base text-accent">
                Coleção de Fevereiro
              </span>
              <h1 className="text-center lg:text-left lg:text-6xl text-4xl font-semibold">
                Nova Coleção <br />
                de Fevereiro
              </h1>
              <h2 className="lg:text-xl text-center lg:text-left mb-4 lg:mb-10">
                Pensada no seu conforto e estilo para o dia-a-dia
              </h2>
              <div className="w-fit">
                <CtaButton text="Comprar agora" />
              </div>
            </article>
          </div>
          <picture className="lg:mt-0 mt-12 w-full flex justify-center items-center">
            <Image
              alt="Background Home Image"
              src={"/pages/home/background.svg"}
              width={420}
              height={420}
              className="lg:flex hidden selection:bg-transparent"
            />
            <Image
              alt="Background Home Image"
              src={"/pages/home/background.svg"}
              width={220}
              height={220}
              className="lg:hidden flex my-4 selection:bg-transparent"
            />
          </picture>
        </section>

        <section className="mx-auto max-w-6xl w-full flex flex-col items-center lg:py-20 py-12 lg:px-12 px-4">
          <h2 className="text-center lg:text-3xl text-2xl font-semibold text-slate-700">
            Produtos mais vendidos
          </h2>
          <p className="text-sm mt-2 lg:text-base text-center">
            Confira abaixo os nossos produtos em alta e do momento
          </p>
          <div className="gap-12 grid lg:grid-cols-3 max-w-5xl items-center w-full mt-12">
            {productData?.map((product: ProductProps, index: number) => (
              <ProductCard product={product} key={`product_card_${index}`} />
            ))}
          </div>
          <SeeMore link="/catalogo" />
        </section>

        <section className="bg-rose-50 lg:rounded-md mx-auto lg:py-20 py-12 max-w-6xl w-full flex flex-col items-center lg:px-12 px-4">
          <h1 className=" w-full text-center font-[500] text-4xl cursor-default max-w-4xl">
            Fornecendo{" "}
            <span className="font-[500] text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-900 to-rose-400">
              Estilo e Conforto
            </span>{" "}
            para
            <span className="font-[500] text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-900 to-rose-400">
              {" "}
              milhares
            </span>{" "}
            de pessoas no mundo
          </h1>
        </section>

        <section className="mx-auto max-w-6xl w-full flex flex-col items-center lg:py-20 py-12 lg:px-12 px-4">
          <h2 className="text-center lg:text-3xl text-2xl font-semibold text-slate-700">
            Produtos Recomendados
          </h2>
          <p className="text-sm mt-2 lg:text-base text-center">
            Confira abaixo os produtos favoritos de nossos clientes striedzen
          </p>
          <div className="gap-12 grid lg:grid-cols-3 max-w-5xl items-center w-full mt-12">
            {productData
              ?.slice(0, 3)
              .map((product: ProductProps, index: number) => (
                <ProductCard product={product} key={`product_card_${index}`} />
              ))}
          </div>
          <SeeMore link="/catalogo" />
        </section>

        <section
          className="relative w-full max-w-6xl flex flex-col justify-center lg:rounded-md min-h-[400px] lg:py-20 py-12 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://mercadoeconsumo.com.br/wp-content/uploads/2022/12/Puma-3.jpg)`,
          }}
        >
          <article className="w-full p-12 z-20">
            <h2 className="text-white lg:text-4xl text-2xl font-bold drop-shadow-md">
              Linha de Fevereiro
            </h2>
            <p className="text-white lg:text-lg text-base mb-8 drop-shadow-md">
              Que tal uma praia nesse calor?
            </p>
            <Link
              href="#"
              className="bg-blackish text-white lg:rounded-sm py-2 px-4 w-[150px] text-sm text-center"
            >
              Ver Coleção
            </Link>
          </article>
          <div className="rounded-md absolute w-full h-full bg-gradient-to-b from-slate-800 to-transparent"></div>
        </section>

        <section className="mx-auto max-w-6xl w-full flex flex-col items-center lg:py-20 py-12 lg:px-12 px-4">
          <h2 className="text-center lg:text-3xl text-2xl font-semibold text-slate-700">
            Confira também
          </h2>
          <p className="text-sm mt-2 lg:text-base text-center">
            Experimente alguns lançamentos da nossa empresa, você vai gostar
            muito
          </p>
          <div className="gap-12 grid lg:grid-cols-3 max-w-5xl items-center w-full mt-12">
            {productData
              ?.slice(0, 3)
              .map((product: ProductProps, index: number) => (
                <ProductCard product={product} key={`product_card_${index}`} />
              ))}
          </div>
          <SeeMore link="/catalogo" />
        </section>

        <section className="mx-auto max-w-6xl w-full flex flex-col items-center lg:py-20 py-12 lg:px-12 px-4">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-center lg:text-3xl text-2xl font-semibold">
              Quem é a Striedzen?
            </h2>
            <p className="text-sm mt-2 lg:text-base text-center">
              Conheça um pouco mais sobre a nossa história
            </p>

            <div className="mt-20 flex flex-wrap lg:flex-nowrap justify-between w-full gap-12">
              <article className="w-full">
              <span className="text-accent text-sm text-center lg:text-left">
                 Fundação
                </span>
                <h3 className="font-semibold text-xl text-center lg:text-left">
                  Fundada para o Projeto IFSP
                </h3>
                <p className="mt-4 text-sm text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti, aut. Dicta, nisi molestiae adipisci est accusamus,
                  eius, dolorem asperiores tempore eveniet quidem esse labore
                  similique vero quisquam soluta architecto culpa.
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti, aut. Dicta, nisi molestiae adipisci est accusamus,
                  eius, dolorem asperiores tempore eveniet quidem esse labore
                  similique vero quisquam soluta architecto culpa.
                </p>
              </article>
              <picture className="max-w-full w-full">
                <Image
                  src={
                    "https://capivari.sp.gov.br/portal/wp-content/uploads/2022/09/DJI_0040-scaled.jpg"
                  }
                  alt="Article Image"
                  width={1000}
                  height={1000}
                  className="w-full rounded-sm"
                />
              </picture>
            </div>
            <div className="mt-20 flex flex-wrap lg:flex-nowrap justify-between w-full gap-12">
              <picture className="max-w-full w-full lg:flex hidden">
                <Image
                  src={
                    "https://capivari.sp.gov.br/portal/wp-content/uploads/2022/09/DJI_0040-scaled.jpg"
                  }
                  alt="Article Image"
                  width={1000}
                  height={1000}
                  className="w-full rounded-sm"
                />
              </picture>
              <article className="w-full">
              <span className="text-accent text-sm text-center lg:text-left">
                 Cultura e Valores
                </span>
                <h3 className="font-semibold text-xl text-center lg:text-left">
                  Fundada para o Projeto IFSP
                </h3>
                <p className="mt-4 text-sm text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti, aut. Dicta, nisi molestiae adipisci est accusamus,
                  eius, dolorem asperiores tempore eveniet quidem esse labore
                  similique vero quisquam soluta architecto culpa.
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Deleniti, aut. Dicta, nisi molestiae adipisci est accusamus,
                  eius, dolorem asperiores tempore eveniet quidem esse labore
                  similique vero quisquam soluta architecto culpa.
                </p>
              </article>
              <picture className="max-w-full w-full lg:hidden flex">
                <Image
                  src={
                    "https://capivari.sp.gov.br/portal/wp-content/uploads/2022/09/DJI_0040-scaled.jpg"
                  }
                  alt="Article Image"
                  width={1000}
                  height={1000}
                  className="w-full rounded-sm"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className=" mx-auto max-w-6xl w-full flex flex-col items-center lg:py-20 py-12 lg:px-12 px-4">
          <div className="w-full flex flex-col items-center gap-y-2">
            <h2 className="text-center lg:text-3xl text-2xl font-semibold">
              Procurando algo mais?
            </h2>
            <div className="flex items-center rounded-lg border-2 p-4 h-[45px] w-full max-w-xl border-gray-300 gap-x-4 mt-4">
              <BsSearch className="gray-icon cursor-pointer" size={15} />
              <input
                type="text"
                className="outline-none bg-transparent text-zinc-500"
                placeholder="Digite aqui"
                maxLength={40}
                minLength={1}
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
