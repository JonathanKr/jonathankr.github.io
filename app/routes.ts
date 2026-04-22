import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/Home.tsx"),
  route("/md/*", "routes/MarkdownPage.tsx"),
  route("*", "routes/NotFound.tsx"),
] satisfies RouteConfig;
