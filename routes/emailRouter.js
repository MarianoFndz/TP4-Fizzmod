import { Router } from "express"
import emailController from "../controllers/emailController.js"

const router = Router()

router.post("/", emailController.addEmail)

router.get("/", emailController.renderView)

export default router