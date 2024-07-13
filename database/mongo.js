// import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;
const uri = 'mongodb://localhost:27017/';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const dbOpen = () => {
	mongoose
		.connect(uri)
		.then(() => {
			console.log('database');
		})
		.catch((err) => {
			console.error(err);
		});
};
