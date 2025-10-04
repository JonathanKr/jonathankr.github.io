import logoSVG from "/svg/logo.svg";

import HeroSection from "~/components/HeroSection";
import Navigation from "~/components/Navigation";
import type { Route } from "./+types/NotFound";

export function meta({}: Route.MetaArgs) {
  return [{ title: "404" }];
}

const NotFound = () => {
  return <HeroSection overline="Not Found" heading="404" />;
};

export default NotFound;
