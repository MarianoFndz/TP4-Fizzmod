import { Router } from "express"
import ProductModel from "../models/ProductModel.js"

const router = Router()

router.post("/ingreso", async ({ body } = req, res) => {

	const newProduct = new ProductModel(body)
	await ProductModel.create(newProduct)

	res.redirect('/listar')

})
export default router