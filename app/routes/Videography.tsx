import Navigation from "~/components/Navigation";
import type { Route } from "./+types/Videography";

export function meta({}: Route.MetaArgs) {
  return [{ title: "ReseaVideographyrch" }];
}

const Videography = () => {
  return (
    <div className="flex h-screen flex-col items-center bg-teal-900">
      <Navigation />
    </div>
  );
};

export default Videography;
