'use strict'
import nodemailer from "nodemailer"

const sendMail = async ({
	to,
	subject = 'Actualizacion',
	html
}) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			secure: false,
			auth: {
				user: process.env.USER_EMAIL,
				pass: process.env.USER_PASSWORD
			},
			tls: {
				rejectUnauthorized: false
			}
		})

		const { messageId } = await transporter.sendMail({
			from: '"👻" <no-remplay@correo.com>',
			to,
			subject,
			html
		})
		console.log(messageId)

		return messageId
	} catch (err) {
		console.error(err)
	}
}

export default sendMail
