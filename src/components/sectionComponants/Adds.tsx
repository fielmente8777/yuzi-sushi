"use client";
import { AddsTypes } from "@/@types/@types";
import { Container, Headings, Section } from "@/components";
import { AppContext } from "@/contextApi/AppContext";
import { ArrowBtn, OutLineCallCircleIcon } from "@/utils/icons";
import Link from "next/link";
import { useContext } from "react";

const Adds: React.FC<AddsTypes> = ({ title, description, links }) => {
  const { setIsOpenPopupForm } = useContext(AppContext);
  return (
    <Section>
      <Section
        defaultPadding={false}
        className=" box-shadow_2 rounded-tr-[40px] relative after:absolute after:inset-0 after:bg-white after:z-[-2]"
      >
        <div className="w-full bg_img py-[4.5rem]">
          <Container>
            <div className="flex max-md:flex-col max-md:gap-8 md:items-center">
              <div className="w-full flex max-w-lg gap-4">
                <span className="mt-1">
                  <OutLineCallCircleIcon />
                </span>
                <div className="max-w-sm">
                  <Headings
                    level={2}
                    className="text-secondary md:text-[2rem] font-fr "
                    heading={title}
                  />
                  <Link href={links[0].href}>
                    <span className="text-lg text-light">{links[0].label}</span>
                  </Link>
                </div>
              </div>
              <p className="text-lg text-light md:col-span-3 md:border-l md:px-14 border-secondary">
                {description}
              </p>
              <div className="">
                <button
                  onClick={() => setIsOpenPopupForm(true)}
                  className="bg-secondary py-3 text-nowrap px-6 flex items-center gap-2 text-lg text-white w-fit border border-secondary hover:bg-white hover:text-secondary shadow-inner rounded-full"
                >
                  {links[1].label} <ArrowBtn />
                </button>
              </div>
            </div>
          </Container>
        </div>
      </Section>
    </Section>
  );
};

export default Adds;
