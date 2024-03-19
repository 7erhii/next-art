import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Header");
  return (
    <div >
      <h1 className="font-sans font-thin">{t("title") }</h1>
    </div>
  );
}
