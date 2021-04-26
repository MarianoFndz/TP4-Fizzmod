import { Router } from "express"
import listController from "../controllers/listController.js"

const router = Router()

router.get("/", listController.renderView)


export default router