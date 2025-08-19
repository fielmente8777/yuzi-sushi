"use client";
import { TestimonialsPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components";
import { TestimonialCard } from "@/components/cards";
import { SwiperCarousel } from "@/components/sliders";
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials: React.FC<TestimonialsPropsType> = ({ cards }) => {
  return (
    <SectionWithContainer
      sectionClassName="relative"
    >
      <div className="box-shadow_2 card_class">
        <SwiperCarousel
          data={cards}
          slidesPerView={1}
          className="box-shadow_2"
          spaceBetween={0}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".pagination" }}
          renderSlide={(card) => <TestimonialCard {...card} />}
        />
      </div>
      <div className="absolute md:bottom-[8rem] md:left-[40rem] bottom-12 left-8 z-20 flex justify-center">
        <div className="pagination flex items-center gap-4" />
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;
