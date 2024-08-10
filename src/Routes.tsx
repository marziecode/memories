import { RouteObject } from "react-router-dom";
import Home from "./screens/Home";
import { PrivateRoute } from "./PrivateRoute";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <PrivateRoute Page={<Home />} />,
  },
];
