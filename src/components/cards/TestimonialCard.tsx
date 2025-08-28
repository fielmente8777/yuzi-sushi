import Image from "next/image";
import { FillStar, Divider } from "@/utils/icons";
import { TestimonialsPropsType } from "@/@types/@types";

const TestimonialCard: React.FC<TestimonialsPropsType["cards"][0]> = ({
  description,
  title,
}) => {
  return (
    <div className="w-full flex max-sm:flex-col justify-center md:px-16 md:py-14 max-md:pt-7 max-md:pb-12 ">
      <div className="md:max-w-sm w-full px-6">
        <div className="relative w-full md:aspect-[4/3] aspect-[4/2]">
          <Image
            src={"/Frame.png"}
            alt="rating"
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="md:pe-3 md:my-[6rem] lg:rotate-0 rotate-90 md:w-fit w-[3rem] max-md:mx-auto h-[4rem] flex items-center justify-center ">
        <Divider />
      </div>
      <div className="w-full flex flex-col gap-4 px-4 max-md:mt-2">
        <ul className="flex gap-1">
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item}>
              <FillStar />
            </li>
          ))}
        </ul>
        <p className="text-lg text-light">{description}</p>
        {/* <h3 className="text-xl font-fr text-secondary">{title}</h3> */}
      </div>
    </div>
  );
};

export default TestimonialCard;
