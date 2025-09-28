import trainGif from "/gif/train.gif";
import waterGif from "/gif/water.gif";
import logoSVG from "/svg/logo.svg";
import { Link } from "react-router";

import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

const Home = () => {
  return (
    <div className="flex h-screen w-full items-center justify-evenly bg-black">
      <img src={waterGif} className="w-80" />
    </div>
  );
};

export default Home;
