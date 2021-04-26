import fs from "fs"

const fsp = fs.promises
const FILE_URL = `${process.cwd()}/correo.dat`

const addInfoDat = async () => {
	const doesFileExists = fs.existsSync(`${FILE_URL}`)
	if (!doesFileExists) await fsp.writeFile(`${FILE_URL}`, `marianofernandez2480@gmail.com`)
}

export default addInfoDat