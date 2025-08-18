import {
  BestChefs,
  FillFacebookIcon,
  FillInstagramIcon,
  FreshProducts,
  PerfectSushi,
  TrueRecipes,
} from "@/utils/icons";
import { contacts } from "../../../contact";

export const homePageData = {
  bannerData: {
    title: "Experience Pure",
    subTitle: "Sushi Perfection",
    images: ["/im7.png", "/im13.png"],
    link: {
      label: "Explore Menu",
      href: "",
    },
  },
  aboutUs: {
    title: "About Us",
    subTitle: "London’s Boldest Sushi Experience",
    description: [
      "Yuzi Sushi, known as Yuzi Cheesy Sushi & Grill in Kentish Town, London, is a vibrant fusion eatery blending creative sushi rolls with indulgent cheesy toppings and Japanese-inspired mains. Popular on platforms like Deliveroo, Uber Eats, and Just Eat, it stays true to bold flavour profiles, fast delivery, and fun, Instagram-worthy offerings.",
      "Fresh, sustainable sushi crafted with care — from melt-in-your-mouth nigiri to seasonal rolls. More than fast food, we’re fast fine food, served with warmth, thoughtful packaging, and speedy delivery. Lunch, dinner, or weekend treats — order now and taste the tradition.",
    ],
    src: "/im16.png",
  },
  orderNow: {
    title: "Order Now",
    images: ["/im14.png", "/im2.png", "/im12.png"],
  },
  ourServices: {
    title: "Fresh to Perfect — Sushi by the Best",
    cards: [
      {
        title: "Fresh Products",
        description: "Guaranteed quality from our farm to your table",
        icon: <FreshProducts />,
      },
      {
        title: "Perfect Sushi",
        description:
          "Freshness and naturalness are the main principles of our production",
        icon: <PerfectSushi />,
      },
      {
        title: "True Recipes",
        description:
          "We produce not only traditional but also innovative products",
        icon: <TrueRecipes />,
      },
      {
        title: "Best Chefs",
        description:
          "Freshness and naturalness are the main principles of our production",
        icon: <BestChefs />,
      },
    ],
  },
  adds:{
    title: "Get in touch for bulk food orders.",
    description: "From lunch to weekend treats, enjoy sushi that feels like home. Order now or contact us for bulk orders.",
    links: [
      {
        label: "07775211046",
        href: "tel:07775211046",
      },
      {
        label: "Fill Enquiry Form",
        href: "",
      },
    ],
  },
  popularDishes: {
    title: "Our Best Sellers ",
    cards: [
      {
        src: "/dishes/im1.webp",
        title: "Lorem Ipsum",
      },
      {
        src: "/dishes/im2.webp",
        title: "Lorem Ipsum",
      },
      {
        src: "/dishes/im3.webp",
        title: "Lorem Ipsum",
      },
      {
        src: "/dishes/im4.webp",
        title: "Lorem Ipsum",
      },
      {
        src: "/dishes/im5.webp",
        title: "Lorem Ipsum",
      },
      {
        src: "/dishes/im6.webp",
        title: "Lorem Ipsum",
      },
      {
        src: "/dishes/im7.webp",
        title: "Lorem Ipsum",
      },
      {
        src: "/dishes/im8.webp",
        title: "Lorem Ipsum",
      },
      {
        src: "/dishes/im9.webp",
        title: "Lorem Ipsum",
      },
      {
        src: "/dishes/im10.webp",
        title: "Lorem Ipsum",
      },
      {
        src: "/dishes/im11.webp",
        title: "Lorem Ipsum",
      },
    ],
  },
  testimonials: {
    cards: [
      {
        title: "Lorem ipsum",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
      },
    ],
  },
};

export const socialLinks = [
  {
    platform: Object.keys(contacts.socialContacts)[0],
    url: contacts.socialContacts.facebook,
    icon: <FillFacebookIcon />,
  },
  {
    platform: Object.keys(contacts.socialContacts)[1],
    url: contacts.socialContacts.instagram,
    icon: <FillInstagramIcon />,
  },
];
