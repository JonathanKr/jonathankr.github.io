import HeroSection from "~/components/HeroSection";
import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

const Home = () => {
  return (
    <div className="flex h-screen flex-col bg-teal-900">
      <HeroSection overline="Hello I'm" heading="Jonathan Kron" />
      <footer className="flex flex-1 items-center justify-center font-mono text-white/40">
        2025
      </footer>
    </div>
  );
};

export default Home;
