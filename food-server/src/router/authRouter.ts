import { Router } from "express";
import { signup } from "../controller/user";

const router = Router();

router.route("/signup").post(signup);
// router.route("/login").get(login);

export default router;