import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: true
	},
	tsCreate: {
		type: Date,
		default: Date.now
	},
	enable: {
		type: Boolean,
		default: true
	}
})

export default mongoose.model('products', ProductSchema)