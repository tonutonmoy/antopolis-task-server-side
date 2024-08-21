import express from "express";
import { AnimalAndCategoryControllers } from "./AnimalAndCategory.Controller";





const router = express.Router();

router.get(
  "/animal/:name",
 
  AnimalAndCategoryControllers.getAnimal
);
router.get(
  "/category",
 
  AnimalAndCategoryControllers.getCategory
);


router.post(
  "/animal",
 

  AnimalAndCategoryControllers.createAnimal
);
router.post(
  "/category",
 

  AnimalAndCategoryControllers.createCategory
);


export const AnimalAndCategoryRoutes = router;
