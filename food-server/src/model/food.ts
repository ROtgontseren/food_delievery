import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    require: [true, "Хоолны нэрийг заавал оруулна."],
    unique: true,
    maxlength: [50, "Хоолны нэрний урт 50 тэмдэгтээс хэтрэхгүй байна."],
  },
  price: {
    type: Number,
    default: 0,
  },
  discountPrice: {
    type: Number,
    default: 0,
  },
  isSale: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: [true, "Хоолны тайлбарыг заавал оруулна."],
  },
  image: {
    type: String,
    default: "no-food-photo",
  },
  category: {
    type: Schema.ObjectId,
    ref: "category",
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Food = model("Food", foodSchema);
export default Food;