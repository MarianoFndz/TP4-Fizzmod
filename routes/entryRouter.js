import { Router } from "express"
import ProductModel from "../models/ProductModel.js"
import sendProductsEmailService from "../utils/sendProductsEmail.js"
import entryController from "../controllers/entryController.js"

const router = Router()

router.post("/", entryController)

export default router