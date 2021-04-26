import { Router } from "express"
import fs from "fs"
import readInfoDat from "../utils/readInfoDat.js"

const fsp = fs.promises

const router = Router()

router.post("/", async (req, res) => {
	const email = req.body.email

	console.log(email, process.cwd())
	await fsp.appendFile(`${process.cwd()}/correo.dat`, `/${email}`)
	res.status(200).end()
})

router.get("/", (req, res) => {
	res.status(200).render("correo")
})

export default router