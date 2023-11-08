import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    address: {
      country: { type: String, default: "Egypt" },
      city: { type: String, default: "" },
    },
    employeeStatus: {
      type: String,
      enum: ["employed", "unemployed"],
      default: "unemployed",
    },
    // salaryRange: {
    //   fromRange: { type: Number, require: true },
    //   toRange: { type: Number, require: true },
    // },
    dateAvailable: { type: Date },
    positionAppliedFor: { type: String },
    jobType: { type: String, enum: ["full-time", "part-time"], require: true },
    education: {
      college: { type: String, require: true },
      major: { type: String, require: true },
      university: { type: String, require: true },
      year: { type: Number, require: true },
      grade: { type: Number, require: true },
    },
    workExperience: [
      {
        company: { type: String },
        position: { type: String },
        from: { type: Date },
        to: { type: mongoose.Schema.Types.Mixed },
      },
    ],
    resumeLink: { type: String },
    license: { type: Array, default: [] },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
let Resume: mongoose.Model<any>;
try {
  Resume = mongoose.model("Resume", resumeSchema);
} catch (error) {
  Resume = mongoose.model("Resume");
}

export default Resume;
