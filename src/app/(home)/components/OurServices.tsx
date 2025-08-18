"use client";
import { OurServicesPropsType } from "@/@types/@types";
import { Section } from "@/components";
import { OurServicesCard } from "@/components/cards";
import { SwiperCarousel } from "@/components/sliders";
import { Autoplay } from "swiper/modules";

const OurServices: React.FC<OurServicesPropsType> = ({ title, cards }) => {
  return (
    <Section>
      <div className="md:space-y-14 space-y-8 w-full px-4">
        <h2 className="x_lg_font_s font-fr text-secondary text-center">{title}</h2>
        <div className="w-full">
          <SwiperCarousel
            data={cards}
            slidesPerView={1}
            spaceBetween={78}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
            }}
            renderSlide={(item) => <OurServicesCard {...item} />}
          />
        </div>
      </div>
    </Section>
  );
};

export default OurServices;
