
import Carousel from "@/components/Carousel/Carousel";
import HomeListNavbar from "@/components/HomeListNavbar";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {


  return (
    <>
      <Navbar/>
      <HomeListNavbar />
      <Carousel />
    </>
  );
}
