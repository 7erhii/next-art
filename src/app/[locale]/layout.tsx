"use client";

import React, { useEffect, useState } from "react";
import { IntlProvider } from 'next-intl';
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

export default function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
  const [messages, setMessages] = useState({});
  useEffect(() => {
    async function loadMessages() {
      try {
        const importedMessages = await import(`/messages/${locale.toLowerCase()}.json`);
        setMessages(importedMessages.default);
      } catch (error) {
        console.error(`Could not load messages for locale ${locale}`, error);
        setMessages({});
      }
    }
    loadMessages();
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <html lang={locale}>
        <body className={inter.className}>
          <div className="flex flex-col min-h-screen">
            <Header />
            {/* <div className="flex-grow mt-20">{children}</div> */}
            <Hero></Hero>
            <Footer />
          </div>
        </body>
      </html>
    </IntlProvider>
  );
}
