import { Schema, model } from "mongoose";

const schemaBasket = new Schema ({
    // user:{
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true,
    // },
    foods : [{
        food : { type: Schema.Types.ObjectId , ref : "Food", require : true},
        qty: Number,
    }],
    totalPrice : Number,
});

const Basket = model("Basket", schemaBasket);
export default Basket;