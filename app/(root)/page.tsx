import ProductCard from "@/components/Cards/ProductCard";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer";
import HomeListNavbar from "@/components/HomeListNavbar";
import Navbar from "@/components/Navbar";
import { ProductProps } from "@/types/types";
import { getProductsData } from "@/utils/getProducts";

export default async function Home() {
  const productData = await getProductsData();

  return (
    <>
      <Navbar />
      <HomeListNavbar />
      {/* <Carousel /> */}
      <main className="min-h-[62vh] w-full lg:py-20 lg:px-12 px-4 py-12">
        <section className="mx-auto max-w-6xl w-full flex flex-col items-center">
          <h2 className="text-center lg:text-3xl text-xl font-semibold text-slate-700">Produtos mais vendidos</h2>
          <div className="gap-12 grid lg:grid-cols-3 max-w-5xl items-center w-full mt-12">
            {productData?.map((product: ProductProps, index: number) => (
              <ProductCard product={product} key={`product_card_${index}`} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
