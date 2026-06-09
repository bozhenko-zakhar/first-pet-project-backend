import express from "express"
import mongoose from "mongoose"
import "dotenv/config"

const app = express();
const PORT = process.env.PORT ?? 3000;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

async function connectToDB(url) {
	try {
		await mongoose.connect(MONGO_DB_URL);
		console.log("Connection to MongoDB established");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
    process.exit(1);
	}
}

connectToDB(MONGO_DB_URL);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
});