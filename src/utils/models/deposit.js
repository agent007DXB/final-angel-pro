import mongoose, { Schema } from "mongoose";

const depositSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        txid: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        
    },
    {
        timestamp: true,
    }
);

const Deposit = mongoose.model.Deposit || mongoose.model("Deposit", depositSchema);

export default Deposit;