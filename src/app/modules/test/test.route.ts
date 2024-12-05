import { Router } from "express";
import { TestControllers } from "./test.controller";

const router = Router();

router.post("/create", TestControllers.createTestUser);

export const TestRoutes = router;