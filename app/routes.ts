import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("/photography", "routes/Photography.tsx"),
  route("/videography", "routes/Videography.tsx"),
  route("/research", "routes/Research.tsx"),
  route("/contact", "routes/Contact.tsx"),
  route("*", "routes/NotFound.tsx"),
] satisfies RouteConfig;
