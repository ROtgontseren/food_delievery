import {Schema, model} from "mongoose"

const categorySchema = new Schema ({
    name : {
        type: String,
        require: [true, "category neriig zaawal oruulna uu"],
        unique: true,
        maxlenght : [50, "category nernii urt 50 deeshgui bn"] ,
    },
    description : {
        type: String,
        require : [true, "categorygiin tailbar zaawal oruulna"],
    },
    image : {
        type: String,
        default : "no category photo"
    },
    createdAt : {
        type: Date,
        default: Date.now,   
    },
})

const Category = model("category", categorySchema);
export default Category;