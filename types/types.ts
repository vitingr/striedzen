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