import ProductModel from "../models/ProductModel.js"
import emailTemplate from "./emailTemplate.js"
import correoService from "../services/correoService.js"
import sendEmails from "./sendEmailsUtil.js"

export default async function sendProductsEmail() {
	const allProducts = await ProductModel.find()
	const tenProductsAdded = allProducts.length % 10 === 0
	if (tenProductsAdded) {
		const html = emailTemplate(allProducts)
		const emails = await correoService.readCorreoDat()

		sendEmails(emails, html)
	}

}

