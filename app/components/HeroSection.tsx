import logoSVG from "/svg/logo.svg";

import Navigation from "./Navigation";

const HeroSection = ({
  overline,
  heading,
}: {
  overline: string;
  heading: string;
}) => {
  return (
    <section className="flex h-[90vh] w-full flex-col items-center justify-center bg-teal-900">
      <h1 className="z-1 font-sans text-5xl font-bold text-white/40">
        {overline}
      </h1>
      <h1 className="z-1 font-sans text-8xl font-bold text-white/100">
        {heading}
      </h1>
      <Navigation />
      <img
        src={logoSVG}
        alt="Logo"
        className="absolute z-0 ml-16 w-80 opacity-3 select-none"
      />
    </section>
  );
};

export default HeroSection;
