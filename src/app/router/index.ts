import { Router } from "express";
import { AnimalAndCategoryRoutes } from "../modules/AnimalAndCategory/AnimalAndCategory.Route";

const router = Router();

const moduleRoutes = [
  {
    path: "/api",
    route: AnimalAndCategoryRoutes,
  },
 
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
