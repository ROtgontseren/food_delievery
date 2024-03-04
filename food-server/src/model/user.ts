import {Schema,model} from "mongoose";
import bcrypt from "bcrypt"

const orderSchema = new Schema({
    orderNo: String,
    products: [],
    payment: {
      paymentAmount: {
        type: Number,
        default: 0,
      },
      status: {
        type: String,
        enum: ["paid", "unpaid"],
        default: "unpaid",
      },
      paidDate: {
        type: Date,
        default: Date.now,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    address: {
      khoroo: { type: String },
      duureg: { type: String },
      buildingNo: { type: String },
      info: String,
    },
    delivery: {
      status: {
        type: String,
        enum: ["Pending", "Progressing", "Delivered"],
        default: "Pending",
      },
      deliveredAt: {
        type: Date,
        default: Date.now,
      },
    },
  });

  const userSchema = new Schema(
    {
      name: {
        type: String,
        required: [true, "Нэрээ заавал оруулна уу"],
      },
      email: {
        type: String,
        unique: true,
        required: [true, "И-мэйл хаяг заавал оруулна уу"],
      },
      password: {
        type: String,
        required: [true, "Нууц үг заавал оруулна уу"],
        minlenght: 6,
        select: false,
      },
      avatarUrl: {
        type: String,
      },
      isVerified: {
        type: Boolean,
        default: false,
      },
  
      role: {
        type: String,
        enum: ["Admin", "User", "Moderator"],
        default: "User",
      },
      otp: {
        type: String,
        default: "",
      },
      phone: String,
      orders: [orderSchema],
    },
    {
      timestamps: true,
    }
  );
userSchema.pre("save", async function async() {
    if (this.isModified("password")) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
  });

// userSchema.methods.checkPassword = async function (password: string) {
//     return await bcrypt.compare(password, this.password)
// };

const User = model("User", userSchema);

export default User;