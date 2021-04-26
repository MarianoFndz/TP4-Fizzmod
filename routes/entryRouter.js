import { Router } from "express"
import ProductModel from "../models/ProductModel.js"
import mailing from "../services/mailing.js"
import readInfoDat from "../utils/readInfoDat.js"
import emailTemplate from "../utils/emailTemplate.js"

const router = Router()

router.post("/", async ({ body } = req, res) => {
	try {
		const newProduct = new ProductModel(body)
		await ProductModel.create(newProduct)
		const allProducts = await ProductModel.find()

		if (allProducts.length % 10 === 0) {
			const html = emailTemplate(allProducts)
			const emails = await readInfoDat()

			emails.forEach(async element => {
				await mailing({
					to: element,
					html
				})
			})
		}

		res.status(200).redirect('/listar')
	}
	catch (err) {
		console.error(err)
		res.status(400).redirect('/listar')
	}

})
export default router