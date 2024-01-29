import { Router } from "express";
import { sendEmailToUser,veriyOtp} from "../controller/verifyController";

const router = Router();

router.route("/send-email").post(sendEmailToUser);
router.route("/otp").post(veriyOtp)

export default router;