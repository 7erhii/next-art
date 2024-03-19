"use client";

import React, {
  ChangeEvent,
  startTransition,
  useState,
  useEffect,
  useTransition,
} from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { headerStyes } from "@/styles/style-header";
import Image from "next/image";

import mainLogo from "@/assets/images/main-logo.svg";
import { useLocale } from "use-intl";

import Nav from "./Nav";

const Header = () => {
  const router = useRouter();
  const [locale, setLocale] = useState("EN");

  useEffect(() => {
    const nextLocale = Cookies.get("NEXT_LOCALE") || "en";
    setLocale(nextLocale.toUpperCase());
  }, []);

  const changeLanguage = (value: string) => {
    const nextLocale = value;

    router.replace(`/${nextLocale}`);
  };

  return (
    <header className={headerStyes.container}>
      <a href="/" className="header__logo">
        <Image src={mainLogo} alt="Main Logo" />
      </a>

      <Nav></Nav>

      <div className="header__actions flex gap-2">
        <button className="main-btn main-btn--sm main-btn--black bg-mainBlack text-white p-0.9 px-3 rounded-full	">
          <span>Contact us</span>
        </button>
        <div className="language-menu">
          <Select onValueChange={changeLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={locale} />{" "}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">EN</SelectItem>
              <SelectItem value="ru">RU</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
};

export default Header;
