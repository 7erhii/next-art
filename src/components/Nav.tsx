import React from "react";
import { useTranslations } from "next-intl";

import { GridIcon } from "@radix-ui/react-icons";

const Nav = () => {
  const t = useTranslations("Header");

  return (
    <nav className="header__menu">
      <ul className="header__items relative flex">
        <li className="header__item relative group transition-colors hover:bg-mainBlue hover:text-white">
          <div className="header__title cursor-pointer p-6">{t("title1")}</div>
          <div className="header__content absolute hidden group-hover:flex flex-col p-6 bg-mainBlack text-white w-[10000%] rounded-bl-[20px] rounded-br-[20px]">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle1-1")}</p>
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle1-2")}</p>
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle1-3")}</p>
            </div>
          </div>
        </li>
        <li className="header__item relative group transition-colors hover:bg-mainBlue hover:text-white">
          <div className="header__title cursor-pointer p-6">{t("title2")}</div>
          <div className="header__content absolute hidden group-hover:flex flex-col p-6 bg-mainBlack text-white w-[10000%] rounded-bl-[20px] rounded-br-[20px]">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle2-1")}</p>
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle2-2")}</p>
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle2-3")}</p>
            </div>
          </div>
        </li>
        <li className="header__item relative group transition-colors hover:bg-mainBlue hover:text-white">
          <div className="header__title cursor-pointer p-6">{t("title3")}</div>
          <div className="header__content absolute hidden group-hover:flex flex-col p-6 bg-mainBlack text-white w-[10000%] rounded-bl-[20px] rounded-br-[20px]">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle3-1")}</p>
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle3-2")}</p>
            </div>
          </div>
        </li>

        <li className="header__item relative group transition-colors hover:bg-mainBlue hover:text-white">
          <div className="header__title cursor-pointer p-6">{t("title4")}</div>
          <div className="header__content absolute hidden group-hover:flex flex-col p-6 bg-mainBlack text-white w-[10000%] rounded-bl-[20px] rounded-br-[20px]">
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle4-1")}</p>
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle4-2")}</p>
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle4-3")}</p>
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle4-4")}</p>
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle4-5")}</p>
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle4-6")}</p>
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer">
              <GridIcon />
              <p> {t("subtitle4-7")}</p>
            </div>
          </div>
        </li>

      </ul>
    </nav>
  );
};

export default Nav;
