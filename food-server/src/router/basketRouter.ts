import {NextFunction, Router ,Response} from "express"
import { addBasket } from "../controller/basketController";
import { IReq } from "../utils/interface";

const router = Router();

router.route("/").post((req : IReq ,res : Response, next : NextFunction)=> {
    req.user = {_id : "2344", name: "naraa"};
    next();
}, addBasket)

export default router;