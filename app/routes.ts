import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("/portfolio", "routes/Portfolio.tsx"),
  route("/contact", "routes/Contact.tsx"),
  route("*", "routes/NotFound.tsx"),
] satisfies RouteConfig;
