

import { headerStyes } from "@/styles/style-header";
import Image from "next/image";

import mainLogo from "@/assets/images/main-logo.svg";

import Nav from "./Nav";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {

  return (
    <header className={headerStyes.container}>
      <a href="/" className="header__logo">
        <Image src={mainLogo} alt="Main Logo" />
      </a>

      <Nav></Nav>

      <div className="header__actions flex gap-2">
        <button className="main-btn main-btn--sm main-btn--black bg-mainBlack text-white px-5 py-2 px-3 rounded-full	">
          <span>Contact us</span>
        </button>
        <div className="language-menu">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
