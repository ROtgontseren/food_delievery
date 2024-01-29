import {Schema,model} from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    name: {
        type : String,
        required: [true,"нэрээ заавал оруулна уу"],
    },
    email: {
        type:String,
        unique: [true,"И-мэйл бүртгэгдсэн байна"],
        required: [true,"И-мэйл хаяг заавал оруулна уу"],
    },
    password: {
        type:String,
        required: [true,"Нууц үгээ заавал оруулна уу"],
        minlenght: 6,
        select: false,
    },
    avatarUrl: {
        type: String,
    },
    address: {
        horoo: {type:String},
        duureg: {type:String},
        buildingNo: {type:String},
    },
    role: {
        type:String,
        enum: ['Admin', 'User','Moderator'],
        default: 'User',
    },
    createdAt : {
        type: Date,
        default: Date.now,
    },
    otp: {
        type: String,
        default: "",
    }
});
userSchema.pre('save',async function (){
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(this.password,salt);
        // this.password = hashedPassword;
});

userSchema.methods.checkPassword = async function (password: string) {
    return await bcrypt.compare(password, this.password)
};

const User = model("User", userSchema);

export default User;