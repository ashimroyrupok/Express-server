import { Router } from "express";
import { UserRoutes } from "../modules/user/user.routes";
import { AuthRoutes } from "../modules/auth/auth.rotues";
import { ProductRoutes } from "../modules/product/product.route";

// import { UserRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path:"/auth",
    route:AuthRoutes
  },
  {
    path:"/products",
    route:ProductRoutes
  },
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
