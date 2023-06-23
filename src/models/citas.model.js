import mongoose from "mongoose";

const citasSchema = new mongoose.Schema(
  {
    paciente: {
      type: String,
      required: true,
    },
    comentario: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      default: Date.now,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("citas", citasSchema);
