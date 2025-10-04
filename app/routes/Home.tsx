import HeroSection from "~/components/HeroSection";
import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

const Home = () => {
  return (
    <div>
      <HeroSection overline="Hello I'm" heading="Jonathan Kron" />
    </div>
  );
};

export default Home;
