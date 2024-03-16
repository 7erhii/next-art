"use client";

import React, { ChangeEvent, startTransition, useTransition } from "react";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { headerStyes } from "@/styles/style-header";
import Image from "next/image";

import mainLogo from "@/assets/images/main-logo.svg";
import { useLocale } from "use-intl";

const Header = () => {

//   const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const localActive = useLocale();

  const changeLanguage = (value: string) => {
    const nextLocale = value;

    router.replace(`/${nextLocale}`);
    // startTransition(() => {
    // });
  };

  // const changeLanguage = (e) => {
  //     const newLocale = e.target.value;
  //     router.push(router.asPath, router.asPath, { locale: newLocale})
  // }
  return (
    <header className={headerStyes.container}>
      <h1>hello</h1>
      <a href="/" className="header__logo">
        <Image src={mainLogo} alt="Main Logo" />
      </a>

      <nav className="header__menu">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <div className="header__actions">
        <button className="main-btn main-btn--sm main-btn--black ">
          <span>Contact us</span>
        </button>
        <div className="language-menu">
          <Select onValueChange={changeLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={"EN"} />
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
