"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import { useRouter, useParams } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = useParams();

  const changeLanguage = (value: string) => {
    router.replace(`/${value}`);
  };

  return (
    <div className="language-switcher">
      <Select onValueChange={changeLanguage}>
        <SelectTrigger className="">
          <SelectValue placeholder={locale} />{" "}
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="ru">RU</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
