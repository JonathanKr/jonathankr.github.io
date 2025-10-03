import logoSVG from "/svg/logo.svg";
import React from "react";

import type { Route } from "./+types/Contact";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Contact" }];
}
const Contact = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-teal-900">
      <img
        src={logoSVG}
        alt="Logo"
        className="absolute z-0 ml-16 w-80 opacity-3 select-none"
      />
    </div>
  );
};

export default Contact;
