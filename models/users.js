import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;
import { CI } from './ci.js';

const userSchema = new Schema({
	name: String,
	tlf: Number,
	ci: Number,
	address: String,
	URLimg: String
});

const User = model('User', userSchema);

export class modelUsers {
	static async post({ input }) {
		const user = new User({
			...input
		});

		const verifyCI = await CI.find({});
		const verifyUserPay = await User.find({});

		if (!JSON.stringify(verifyCI).includes(user.ci) || JSON.stringify(verifyUserPay).includes(user.ci)) return false;

		user
			.save()
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(`error conexion ${err}`);
			});

		return user;
	}

	static get() {
		return User.find({});
	}

	static delete() {
		return User.deleteMany({});
	}
}
