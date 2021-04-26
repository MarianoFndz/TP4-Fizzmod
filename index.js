import dotenv from "dotenv"
dotenv.config()

import express from "express"
import logger from "morgan"
import databaseConnection from "./database/config.js"
import path from 'path';
import { fileURLToPath } from 'url';
import compression from "compression"
import correoService from "./services/correoService.js"
import cors from "cors"

import {
	indexRouter,
	entryRouter,
	listRouter,
	emailRouter
} from "./routes/index.js"


databaseConnection()

	; (async () => {
		await correoService.addInitializationCorreoDat()
	}
	)();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express()

app.use(cors())
app.use(compression())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger("dev"))
app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))

app.use("/", indexRouter)
app.use("/ingreso", entryRouter)
app.use("/listar", listRouter)
app.use("/set-correo", emailRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log("server starting on port : " + PORT)
});

