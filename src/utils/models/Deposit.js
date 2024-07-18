import mongoose from "mongoose";

const DepositSchema = new mongoose.Schema(
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
    timestamps: true, // Corrected from 'timestamp' to 'timestamps'
  }
);

const Deposit = mongoose.models.Deposit || mongoose.model("Deposit", DepositSchema);

export default Deposit;
