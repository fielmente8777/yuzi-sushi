import { OrderNowPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components";
import Image from "next/image";
import Link from "next/link";

const OrderNow: React.FC<OrderNowPropsType> = ({ title, images }) => {
  return (
    <SectionWithContainer sectionClassName="order overflow-x-clip">
      <div className="flex justify-center gap-2 items-center mb-10">
        <div className="relative w-[3rem] aspect-square">
          <Image
            src="/im3.png"
            alt="Icon"
            fill
            className="cover"
            sizes="3rem"
            quality={100}
          />
        </div>
        <h2 className="md_font_s text-secondary font-fr">{title}</h2>
      </div>
      <div className="md:grid hidden grid-cols-3 bg-white gap-4 max-w-[1033px] mx-auto w-full box-shadow_2 py-12 rounded-br-[40px] divide-x-2 divide-tertiary">
        {images.map((image, index) => (
          <Link
            href={image.href}
            key={index}
            target="_blank"
            className="relative w-full aspect-[4/.55]"
          >
            <Image src={image.src} alt={title} fill className="contain px-16" />
          </Link>
        ))}
      </div>
      <div className="md:hidden flex flex-col gap-4">
        {images.map((image, index) => (
          <div key={index} className=" box-shadow_2 p-[2rem] rounded-br-[40px]">
            <Link href={image.href} target="_blank" className="relative w-full aspect-[4/.8]">
              <Image src={image.src} alt={title} fill className="contain" />
            </Link>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default OrderNow;
