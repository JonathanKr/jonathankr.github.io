import HeroSection from "~/components/HeroSection";
import type { Route } from "./+types/Contact";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Contact" }];
}
const Contact = () => {
  return (
    <div className="flex h-screen flex-col bg-teal-900">
      <HeroSection overline="You're welcome to" heading="Contact Me" />
      <footer className="flex flex-1 items-center justify-center font-mono text-white/40">
        2025
      </footer>
    </div>
  );
};

export default Contact;
