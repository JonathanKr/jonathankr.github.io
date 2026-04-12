import type { Route } from "./+types/NotFound";

export function meta({}: Route.MetaArgs) {
  return [{ title: "404" }];
}

const NotFound = () => {
  return <div className="font-serif">Not Found</div>;
};

export default NotFound;
