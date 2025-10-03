import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("/photography", "routes/Portfolio.tsx", { id: "photography" }),
  route("/videography", "routes/Portfolio.tsx", { id: "videography" }),
  route("/research", "routes/Portfolio.tsx", { id: "research" }),
  route("/contact", "routes/Contact.tsx"),
  route("*", "routes/NotFound.tsx"),
] satisfies RouteConfig;
