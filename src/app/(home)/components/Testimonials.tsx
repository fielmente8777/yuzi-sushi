"use client"
import { TestimonialsPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components";
import { TestimonialCard } from "@/components/cards";
import { SwiperCarousel } from "@/components/sliders";
import { Pagination } from "swiper/modules";

const Testimonials: React.FC<TestimonialsPropsType> = ({ cards }) => {
  return (
    <SectionWithContainer>
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        className="box-shadow_2 bg-white"
        spaceBetween={0}
        modules={[Pagination]}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        renderSlide={(card) => <TestimonialCard {...card} />}
      />
    </SectionWithContainer>
  );
};

export default Testimonials;
