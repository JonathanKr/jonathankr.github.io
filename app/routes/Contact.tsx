import logoSVG from "/svg/logo.svg";

import HeroSection from "~/components/HeroSection";
import type { Route } from "./+types/Contact";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Contact" }];
}
const Contact = () => {
  return (
    <div className="">
      <HeroSection overline="Your welcome to" heading="Contact Me" />
    </div>
  );
};

export default Contact;
