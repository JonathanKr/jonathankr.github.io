import logoSVG from "/svg/logo.svg";
import React from "react";
import { Link } from "react-router";

import { LINKS } from "~/constants/links";
import type { Route } from "./+types/Portfolio";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Portfolio" }];
}

const Portfolio = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-teal-900">
      <h1 className="z-1 font-sans text-5xl font-bold text-white/40">
        This is my
      </h1>
      <h1 className="z-1 font-sans text-8xl font-bold text-white/100">
        Portfolio
      </h1>
      <div className="z-1 mt-5 flex gap-5">
        {LINKS.map((e) => (
          <Link className="font-mono text-white hover:underline" to={e.link}>
            {e.label}
          </Link>
        ))}
      </div>
      <img
        src={logoSVG}
        alt="Logo"
        className="absolute z-0 ml-16 w-80 opacity-3 select-none"
      />
    </div>
  );
};

export default Portfolio;
