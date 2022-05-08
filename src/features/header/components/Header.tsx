/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import HeaderLogo from "./HeaderLogo";
import Hamburger, { HamburgerButton } from "./Hamburger";
import AuthButtons from "./AuthButtons";
import HeaderMainNav from "./HeaderMainNav";

const Header = () => {
  return (
    <Popover className="relative bg-white">
      <div
        className="absolute inset-0 shadow z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="flex justify-between items-center px-4 py-5 md:px-6  md:py-4 md:justify-start md:space-x-10">
          <HeaderLogo />
          <div className="-mr-2 -my-2 md:hidden">
            <HamburgerButton />
          </div>
          <HeaderMainNav />
          <AuthButtons />
        </div>
        <Hamburger />
      </div>
    </Popover>
  );
};

export default Header;
