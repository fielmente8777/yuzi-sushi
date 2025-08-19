import type { Metadata } from "next";
import { Fraunces, Lato } from "next/font/google";
import "./globals.css";
import "./styles.scss";
import { AppProvider } from "@/contextApi/AppContext";
import { Footer } from "@/components";
import Navbar from "@/components/navbar/Navbar";
import PopupForm from "@/components/pop-ups/PopupForm";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fr",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-la",
});

export const metadata: Metadata = {
  title: "Yuzi Sushi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${fraunces.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
          <PopupForm />
        </AppProvider>
      </body>
    </html>
  );
}
