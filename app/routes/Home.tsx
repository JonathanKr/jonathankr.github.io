import waterGif from "/gif/out.gif";
import trainGif from "/gif/train.gif";
import logoSVG from "/svg/logo.svg";
import { Link } from "react-router";

import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

const Home = () => {
  return (
    <div className="h-screen w-full bg-black">
      <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-black p-5">
        <img src={logoSVG} alt="Logo" className="w-5" />
        <nav className="flex gap-6">
          <Link to={"/"} className="hover:text-white/75">
            Home
          </Link>
          <Link to={"/"} className="hover:text-white/75">
            Projects
          </Link>
          <Link to={"/"} className="hover:text-white/75">
            Research
          </Link>
          <Link to={"/"} className="hover:text-white/75">
            Contact
          </Link>
        </nav>
      </header>

      <section
        id="hero"
        className="flex h-screen w-full flex-col items-center justify-center text-center"
      >
        <img
          src={waterGif}
          alt="Hero animation"
          className="w-80 rounded-full mix-blend-lighten contrast-150"
        />
      </section>
    </div>
  );
};

export default Home;
