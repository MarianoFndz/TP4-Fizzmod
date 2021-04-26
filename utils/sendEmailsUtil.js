import mailing from "../services/mailing.js"

export default function sendEmails(emails, html) {
	emails.forEach(async element => {
		await mailing({
			to: element,
			html
		})
	})
}