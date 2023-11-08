import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, require: true },
    gender: { type: String, enum: ["male", "female"], require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    mobile: { type: String, require: true },
    dateOfBirth: { type: Date, require: true },

    role: {
      type: String,
      enum: ["admin", "hr", "user"],
      default: "user",
      require: true,
    },
    company: { String },
    resume: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      default: null,
    },
    preferredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // if Hr
    hrsViewed: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // if Hr viewed this resume
    activeStatus: { type: Boolean, default: true },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
let User: mongoose.Model<any>;

try {
  User = mongoose.model("User", userSchema);
} catch (error) {
  User = mongoose.model("User");
}

export default User;
