import mongoose from "mongoose";

const sellusdtSchema = new mongoose.Schema(
  {
    usdtVol: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    txref: {
      type: String,
      required: true,
    },
    accnum: {
      type: String,
      required: true,
    },
    accifsc: {
      type: String,
      required: true,
    },
    accname: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Corrected to enable timestamps
  }
);

const Sellusdt = mongoose.models.Sellusdt || mongoose.model("SellUsdt", sellusdtSchema);

export default Sellusdt;
