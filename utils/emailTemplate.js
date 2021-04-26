
export default function registerTemplate(products) {
	const names = products.map(element => `
		<tr>
			<th>${element.name}</th>
			<th>$${element.price}</th>
			<th>${element.description}</th>
			<th><img src="${element.img}" alt="Product image" height="50px"></th>
		</tr>
	`)
	const namesString = "".concat(...names)

	return `
        <html>
        <head></head>
        <body>
            <h3>¡Actualizacion de los productos!</h3>
						<table border="2px">
								<tr>
									<th>Name</th>
									<th>Price</th>
									<th>Description</th>
									<th>Image</th>
								</tr>
								${namesString}
						</table>
        </body>
        </html>
    `
}

