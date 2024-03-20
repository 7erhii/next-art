import { useTranslations } from "next-intl";
import Image from "next/image";
import heroBgImage from "@/assets/images/hero-bg.png";

export default function Hero() {
  const t = useTranslations("Hero");
  const highlightKeyword = (text:string) => {
    const parts = text.split(/(ready | готово)/gi);
    return parts.map((part, index) =>
      /ready|готово/i.test(part) ? <span key={index} className="highlight" style={styles.spanColor}>{part}</span> : part
    );
  };

  return (
    <div className="hero">
      <div className="mx-auto max-w-6xl text-center py-20 pb-48">
        <div className="hero__title relative">
          <h2 className="uppercase text-8xl font-poppins pr-[3em]">
            {highlightKeyword(t("title-line1"))}
          </h2>
          <h2 className="uppercase text-8xl font-poppins ">
            {t("title-line2")}
          </h2>
          <button className="btn absolute top-0 right-0">Button Text</button>
        </div>
        <div className="hero__subtitle font-poppins py-[5rem]">
          <p>{t("subtitle")}</p>
        </div>
      </div>
      <div className="hero__bg bg-blue-600 flex justify-center">
        <Image src={heroBgImage} alt="Main Logo" />
      </div>
      <div className="hero__cards"></div>
    </div>
  );
}


const styles = {
    spanColor : {
        color: "#3C7BF6"
    }
}