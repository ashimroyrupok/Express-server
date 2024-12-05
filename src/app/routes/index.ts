import { Router } from "express";
import { TestRoutes } from "../modules/test/test.route";

// import { UserRoutes } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: TestRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
