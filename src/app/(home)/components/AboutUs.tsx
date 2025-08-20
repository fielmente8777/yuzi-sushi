import { AboutUsPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components";
import Image from "next/image";

const AboutUs: React.FC<AboutUsPropsType> = ({
  subTitle,
  description,
  src,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 items-center">
        <div className="w-full md:block hidden relative md:aspect-[4/2.5]">
          <Image src={src} alt="About Us" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col gap-6">
          <div className=" space-y-2">
            {/* <h2 className="text-primary text-lg">{title}</h2> */}
            <h2 className="font-fr x_lg_font_s text-secondary">{subTitle}</h2>
          </div>
          <div className="w-full relative aspect-[4/2.5] md:hidden block">
            <Image src={src} alt="About Us" layout="fill" objectFit="cover" />
          </div>
          {description.map((item, index) => (
            <p key={index} className="text-light md:text-lg">
              {item}
            </p>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutUs;
