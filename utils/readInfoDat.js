import fs from "fs"

const fsp = fs.promises

export default async function readInfoDat() {
	const data = await fsp.readFile(`${process.cwd()}/correo.dat`, "utf-8")
	const dataArray = data.split("/")
	return dataArray
}