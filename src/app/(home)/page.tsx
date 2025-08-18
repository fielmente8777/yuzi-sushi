import { Banner } from "@/components";
import { homePageData } from "./homePageData";
import {
  AboutUs,
  OrderNow,
  OurServices,
  PopularDishes,
  Testimonials,
} from "./components";
import { Adds } from "@/components/sectionComponants";

export default function Home() {
  return (
    <main>
      <Banner {...homePageData.bannerData} />
      <AboutUs {...homePageData.aboutUs} />
      <OrderNow {...homePageData.orderNow} />
      <OurServices {...homePageData.ourServices} />
      <Adds {...homePageData.adds} />
      <PopularDishes {...homePageData.popularDishes} />
      <Testimonials {...homePageData.testimonials} />
    </main>
  );
}
