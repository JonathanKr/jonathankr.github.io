import logoSVG from "/svg/logo.svg";

import HeroSection from "~/components/HeroSection";
import Navigation from "~/components/Navigation";
import type { Route } from "./+types/Portfolio";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Portfolio" }];
}

const Portfolio = () => {
  return (
    <div className="">
      <HeroSection overline="Port" heading="folio" />
    </div>
  );
};

export default Portfolio;
