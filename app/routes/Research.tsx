import Navigation from "~/components/Navigation";
import type { Route } from "./+types/Research";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Research" }];
}

const Research = () => {
  return (
    <div className="flex h-screen flex-col items-center bg-teal-900">
      <Navigation />
    </div>
  );
};

export default Research;
