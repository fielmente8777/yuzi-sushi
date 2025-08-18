import { BannerPropsType } from "@/@types/@types";
import Image from "next/image";
import LinkButton from "../buttons/LinkButton";
import Link from "next/link";
import { ArrowBtn } from "@/utils/icons";
import { socialLinks } from "@/app/(home)/homePageData";

const Banner: React.FC<BannerPropsType> = ({
  title,
  subTitle,
  images,
  link,
}) => {
  return (
    <section className="w-full max_screen_width md:pt-24 md:pb-36 py-6 relative banner overflow-x-clip">
      <div className="max-w-[1400px] w-full  ml-auto">
        <div className="grid items-center relative md:grid-cols-2 grid-cols-1 gap-6 md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="max-md:px-4">
              <h1 className="text-primary font-fr xx_lg_font_s">{title}</h1>
              <div className="flex items-center gap-2">
                <div className="relative w-full aspect-[4/4] md:max-w-[5rem] max-w-[3rem]">
                  <Image
                    src={images[0]}
                    alt="image"
                    fill
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
                <h2 className="font-fr xx_lg_font_s text-secondary text-nowrap">
                  {subTitle}
                </h2>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] min-md:hidden">
              <Image
                src={images[1]}
                alt="image"
                fill
                className="object-contain"
              />
              <ul className="absolute bottom-2 right-4 flex items-center gap-4 z-10">
                {socialLinks.map((link) => (
                  <li key={link.platform}>
                    <Link
                      href={link.url}
                      target="_blank"
                      className="w-10 aspect-square rounded-full box-shadow_2 bg-white flex justify-center items-center hover:scale-105 transition-transform duration-300 hover:bg-secondary text-secondary hover:text-white"
                    >
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col max-md:justify-center max-md:items-center">
              <Link
                href={link.href}
                target="_blank"
                className="bg-secondary py-3 px-6 flex items-center gap-2 text-lg text-white w-fit border border-secondary hover:bg-white hover:text-secondary shadow-inner rounded-full"
              >
                {link.label} <ArrowBtn />
              </Link>
            </div>
          </div>
          <div className="absolute -top-[8rem] right-0 w-1/2 max-md:hidden">
            <div className="relative w-full aspect-[4/3] z-50 ">
              <Image
                src={images[1]}
                alt="image"
                fill
                className="object-contain"
              />

              <ul className="absolute bottom-20 right-16 flex items-center gap-4 z-10">
                {socialLinks.map((link) => (
                  <li key={link.platform}>
                    <Link
                      href={link.url}
                      target="_blank"
                      className="w-10 aspect-square rounded-full box-shadow_2 bg-white flex justify-center items-center hover:scale-105 transition-transform duration-300 hover:bg-secondary text-secondary hover:text-white"
                    >
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
