"use client"

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide/Slide";
import { SlideProps } from "@/types/types";
import { SLIDE_DATA } from "@/constants/carousel";

interface CarouselProps {
  slidesToShow?: number;
  slidesToScroll?: number;
  autoplay?: boolean;
  infinite?: boolean;
}
 
const Carousel = ({
  slidesToShow = 1,
  autoplay = true,
  slidesToScroll = 1,
  infinite,
}: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: infinite,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    pauseOnHover: true,
  };

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {SLIDE_DATA.map((item: SlideProps, index: number) => (
            <Slide
              key={`slide_item_${index}`}
              image={item.image}
              mainTitle={item.mainTitle}
              price={item.price}
              title={item.title}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
