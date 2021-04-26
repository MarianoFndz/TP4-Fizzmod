import { Router } from "express"
import indexController from "../controllers/indexController.js"

const router = Router()

router.get("/", indexController.renderView)

export default router