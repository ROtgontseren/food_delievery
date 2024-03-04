import {NextFunction, Router ,Response} from "express"
import { addBasket } from "../controller/basketController";


const router = Router();

router.route("/").post(addBasket);

export default router;