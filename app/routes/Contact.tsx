import Footer from "~/components/Footer";
import HeroSection from "~/components/HeroSection";
import type { Route } from "./+types/Contact";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Contact" }];
}
const Contact = () => {
  return (
    <div className="flex h-screen flex-col bg-teal-900">
      <HeroSection overline="You're welcome to" heading="Contact Me" />
      <Footer />
    </div>
  );
};

export default Contact;
