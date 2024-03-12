import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export interface getInterface {
  request?: Request;
  params: Params;
}

export interface SlideProps {
  image: string;
  title: string;
  mainTitle: string;
  price: number;
}

export interface ImageProps {
  image: {
    src: string
    url: string
    width?: number
    height?: number
  }
}

export interface ButtonProps {
  button: {
    label: string
    url: string
  }
}

export interface ProductProps {
  image: string
  title: string
  subtitle: string
  price: number
  brand: string
}