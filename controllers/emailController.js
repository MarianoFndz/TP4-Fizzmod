import fs from "fs"

const fsp = fs.promises
const FILE_URL = `${process.cwd()}/correo.dat`

const addEmail = async (req, res) => {
	const email = req.body.email
	await fsp.appendFile(FILE_URL, `/${email}`)
	res.status(200).redirect('/listar')
}

const renderView = (req, res) => {
	res.status(200).render("correo")
}


export default {
	addEmail,
	renderView
}