"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { footerData } from "./footerData";
import Link from "next/link";
import { Container } from "../sectionComponants";
import Form from "../forms/Form";
const Footer = () => {
  const pathName = usePathname();
  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <footer className="w-full max_screen_width py-6 md:py-14 footer before:bg-blend-luminosity overflow-hidden">
      <Container className="bg3_img">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="max-md:pb-16">
            <div className="w-full max-w-[11.5rem] mx-auto aspect-[4/3] relative">
              <Image
                src={footerData.logo}
                alt="yuzi sushi"
                fill
                className="object-contain"
                sizes="(max-width: 5rem) 100vw, 5rem"
              />
            </div>
            <p className="text-center text-lg text-light max-w-[34.8rem] mx-auto mt-2">
              {footerData.description}
            </p>
            <div className="md:hidden my-6">
              <Form />
            </div>
            <h2 className="text-center text-[2rem] font-fr text-secondary mt-3">
              {footerData.linksData[0].title}
            </h2>
            <ul className="flex flex-col gap-6 mt-3">
              {footerData.linksData[0].listOfLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="flex gap-2 justify-center ">
                    <span className="">{link.icon}</span>
                    <span className="text-center text-light max-w-[33rem] text-[1.125rem]">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="my-10 w-full h-px bg-[linear-gradient(to_right,_#FFFFFF,_var(--color-secondary),_#FFFFFF)]"></div>
            <div>
              <p className="text-center tracking-wider text-secondary text-lg uppercase">
                © YUZI SUSHI • All Rights Reserved
              </p>
              <p className="text-center tracking-wider text-secondary text-lg mt-1 uppercase">
                Powered by <Link href="https://eazotel.com">EAZOTEL</Link>
              </p>
            </div>
            
          </div>
          <div className="md:block hidden">
            <Form />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
