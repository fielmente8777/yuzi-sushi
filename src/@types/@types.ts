import { JSX } from "react";
export interface NavLinksProps {
  href: string;
  label: string;
  subLinks?: NavLinksProps[];
}

export interface BannerPropsType {
  title: string;
  subTitle: string;
  images: string[];
  link: {
    label: string;
    href: string;
  };
}

export interface AboutUsPropsType {
  title: string;
  subTitle: string;
  description: string[];
  src: string;
}

export interface OrderNowPropsType {
  title: string;
  images: string[];
}

export interface OurServicesPropsType {
  title: string;
  cards: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
}

export interface PopularDishesPropsType {
  title: string;
  cards: {
    src: string;
    title: string;
  }[];
}

export interface TestimonialsPropsType {
  cards: {
    title: string;
    description: string;
  }[];
}



export interface AddsTypes {
  title: string;
  description: string;
  links: {
    label: string;
    href: string;
  }[],
}
