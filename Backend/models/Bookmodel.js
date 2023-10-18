import mongoose from "moongose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: "String",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },

    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);


export default mongoose.model("Books", BookSchema , BookStore)