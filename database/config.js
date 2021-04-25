
import mongoose from 'mongoose'

export default async function databaseConnection() {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connected to Database')
    } catch (error) {
        console.error(error)
    }
}