import testImage from "/gif/out.gif";

import Navigation from "~/components/Navigation";
import type { Route } from "./+types/Photography";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Photography" }];
}

const Photography = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-10 bg-teal-900">
      <Navigation />
      {/* <div>
        {Array.from({ length: 10 }, (_, i) => i).map(() => (
          <img src={testImage} />
        ))}
      </div> */}
    </div>
  );
};

export default Photography;
