import ProductModel from "../models/ProductModel.js"
import sendProductsEmailService from "../utils/sendProductsEmail.js"

export default async function controller({ body } = req, res) {
	try {
		const newProduct = new ProductModel(body)
		await ProductModel.create(newProduct)

		await sendProductsEmailService()

		res.status(200).redirect('/listar')
	}
	catch (err) {
		console.error(err)
		res.status(400).redirect('/listar')
	}
}