// import React, { useEffect, useState } from "react";
// import { IntlProvider } from "next-intl";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero-section";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const locales = ["en", "de"];

import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  unstable_setRequestLocale(locale);

  return (
      <html lang={locale}>
        <body className={"main"}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow mt-20">{children}</div>
            <Hero></Hero>
            <Footer />
          </div>
        </body>
      </html>
  );
}
