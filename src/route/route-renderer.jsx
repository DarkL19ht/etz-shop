import { useRoutes } from "react-router-dom";
import RouteConfig from "./routes-config";

export default function RouteRenderer() {
  const routes = useRoutes(RouteConfig);
  return routes;
}
