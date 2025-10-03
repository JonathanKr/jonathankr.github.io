import waterGif from "/gif/out.gif";
import trainGif from "/gif/train.gif";
import logoSVG from "/svg/logo.svg";
import { useEffect, useRef } from "react";
import { Link } from "react-router";

import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

const Home = () => {
  const links = [
    { link: "/photography", label: "Photography" },
    { link: "/videography", label: "Videography" },
    { link: "/research", label: "Research" },
    { link: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-teal-900">
      <h1 className="z-1 font-sans text-5xl font-bold text-white/40">
        Hello, I am
      </h1>
      <h1 className="z-1 font-sans text-8xl font-bold text-white/100">
        Jonathan Kron
      </h1>
      <div className="z-1 mt-5 flex gap-5">
        {links.map((e) => (
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

export default Home;
