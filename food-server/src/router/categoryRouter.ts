import { Router } from "express";
import {createCategory,deleteCategory,getAllCategory, getCategory, updateCategory} from "../controller/categoryController"
import {authenticate, authorization} from "../middleware/auth";
import {upload} from "../utils/multer"

const router = Router();

router.route("/")
.get(getAllCategory)
.post(upload.single("image"), createCategory);

router.route("/:categoryId")
.get(getCategory)
.put(updateCategory)
.delete(authenticate, authorization("Admin"), deleteCategory)

export default router;