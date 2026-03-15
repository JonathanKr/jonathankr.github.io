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
    <section className="relative flex min-h-[20em] w-full flex-col items-center justify-center text-center sm:min-h-[27em] md:min-h-[35em] lg:min-h-[40em]">
      <h1 className="z-1 font-sans text-2xl leading-tight font-bold text-white/40 sm:text-3xl md:text-4xl lg:text-5xl">
        {overline}
      </h1>
      <h1 className="z-1 font-sans text-5xl leading-tight font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl">
        {heading}
      </h1>
      <Navigation />
      <img
        src={logoSVG}
        alt="Logo"
        className="pointer-events-none absolute z-0 ml-8 w-40 opacity-3 select-none sm:ml-16 sm:w-56 md:w-72 lg:w-80"
      />
    </section>
  );
};

export default HeroSection;
