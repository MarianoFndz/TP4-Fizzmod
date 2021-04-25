import ProductModel from "../models/ProductModel.js"
import { Router } from "express"

const router = Router()

router.get("/listar", async (req, res) => {
	const allProducts = await ProductModel.find()

	res.status(200).render("listar", { allProducts })
})


export default router