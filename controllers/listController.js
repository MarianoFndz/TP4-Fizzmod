import ProductModel from "../models/ProductModel.js"

const renderView = async (req, res) => {
	const allProducts = await ProductModel.find()

	res.status(200).render("listar", { allProducts })
}

export default {
	renderView
}