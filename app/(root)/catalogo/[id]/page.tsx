import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[62vh] w-full lg:py-20 py-32 flex flex-col items-center"></main>
      <Footer />
    </>
  );
};

export default page;
