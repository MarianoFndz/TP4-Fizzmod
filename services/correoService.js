import fs from "fs"

const fsp = fs.promises
const FILE_URL = `${process.cwd()}/correo.dat`

const addInitializationCorreoDat = async () => {
	const doesFileExists = fs.existsSync(`${FILE_URL}`)
	if (!doesFileExists) await fsp.writeFile(`${FILE_URL}`, `marianofernandez2480@gmail.com`)
}

const readCorreoDat = async () => {
	const data = await fsp.readFile(FILE_URL, "utf-8")
	const dataArray = data.split("/")
	return dataArray
}


export default {
	addInitializationCorreoDat,
	readCorreoDat
}