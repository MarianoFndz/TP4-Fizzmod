import { Router } from "express"
import fs from "fs"

const fsp = fs.promises

const router = Router()

router.post("/", async (req, res) => {
	const email = req.body.email

	console.log(email, process.cwd())
	await fsp.appendFile(`${process.cwd()}/info.dat`, `/${email}`)
	res.status(200).end()
})

router.get("/", async (req, res) => {
	const data = await fsp.readFile(`${process.cwd()}/info.dat`, "utf-8")
	const dataArray = data.split("/")
	console.log(dataArray)
	res.status(200).json(dataArray)
})

export default router