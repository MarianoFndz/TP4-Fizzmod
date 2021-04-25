import dotenv from "dotenv"
dotenv.config()

import express from "express"
import logger from "morgan"
import databaseConnection from "./database/config.js"
import path from 'path';
import { fileURLToPath } from 'url';
//import bodyParser from "body-parser"

import ProductModel from "./models/ProductModel.js"
import { assert } from "console"

databaseConnection()

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express()

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))
app.use(logger("dev"))
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
	res.status(200).render("index")
})

app.post("/ingreso", async ({ body } = req, res) => {
	console.log(body)
	const newProduct = new ProductModel(body)
	await ProductModel.create(newProduct)
	res.redirect('/listar')
})

app.get("/listar", async (req, res) => {
	const allProducts = await ProductModel.find()

	res.status(200).render("listar", { allProducts })
})

app.listen(3000)