import HeroSection from "~/components/HeroSection";
import type { Route } from "./+types/NotFound";

export function meta({}: Route.MetaArgs) {
  return [{ title: "404" }];
}

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col bg-teal-900">
      <HeroSection overline="Not Found" heading="404" />
      <footer className="flex flex-1 items-center justify-center font-mono text-white/40">
        2025
      </footer>
    </div>
  );
};

export default NotFound;
