import React from "react";

import type { Route } from "./+types/Portfolio";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Portfolio" }];
}

const Portfolio = () => {
  return <div>Portfolio</div>;
};

export default Portfolio;
