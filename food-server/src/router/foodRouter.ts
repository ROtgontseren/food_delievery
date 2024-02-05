import { Router } from "express";
import {createFood,deleteFood,getAllfood, getFood, updateFood} from "../controller/foodController"

const router = Router();

router.route("/").get(getAllfood).post(createFood);

router.route("/:foodId")
.get(getFood)
.put(updateFood)
.delete(deleteFood)

export default router;