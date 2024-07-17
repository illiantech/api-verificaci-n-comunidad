import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const ciSchema = new Schema({
  ci: Number
});

export const CI = model('CI', ciSchema);

export class modelCI {
  static post({ input }) {
    const ci = new CI({
      ...input
    });

    ci.save()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(`error conexion ${err}`);
      });

    return ci;
  }

  static get() {
    return CI.find({});
  }

  static delete() {
    return CI.deleteMany({});
  }
}
