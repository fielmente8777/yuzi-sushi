"use client";
import { PopularDishesPropsType } from "@/@types/@types";
import { Section } from "@/components";
import PopularDishesCard from "@/components/cards/PopularDishesCard";
import { SwiperCarousel } from "@/components/sliders";
import { BackBtnIcon, NextBtnIcon } from "@/utils/icons";
import { Navigation } from "swiper/modules";

const PopularDishes: React.FC<PopularDishesPropsType> = ({ cards, title }) => {
  return (
    <Section className="popular_dishes">
      <div className="flex flex-col md:gap-14 gap-8">
        <h2 className="x_lg_font_s font-fr text-secondary text-center">
          {title}
        </h2>
        <div className="max-md:px-4 popular_dishes_bg">
          <SwiperCarousel
            data={cards}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
                centeredSlides: true,
              },
            }}
            modules={[Navigation]}
            loop={true}
            className="custom_swiper"
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            renderSlide={(item) => <PopularDishesCard {...item} />}
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="button-prev cursor-pointer flex justify-center items-center box-shadow w-12 hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out aspect-square rounded-full">
            <BackBtnIcon />
          </div>
          <div className="button-next cursor-pointer flex justify-center items-center box-shadow w-12 hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out aspect-square rounded-full">
            <NextBtnIcon />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PopularDishes;
