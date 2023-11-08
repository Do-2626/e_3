import Resume from "@/DB/models/resume.schema";
import User from "@/DB/models/user.schema";
import { connectToDB } from "@/DB/utils/connect";
import { resumeSchema } from "@/ZodSchmeas/resume";
import { auth } from "@/lib/serverUtils";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest) => {
  try {
    const userDetails = await auth();
    if (!userDetails) {
      throw new Error("Unauthorized");
    }
    const data = await req.json();
    const validatedResume = resumeSchema.safeParse(data);
    if (!validatedResume.success) {
      return NextResponse.json({
        success: false,
        msg: validatedResume?.error?.errors || "Invalid data",
      });
    }
    const resume = new Resume({
      user: userDetails._id,
      ...validatedResume?.data,
    });
    await connectToDB();
    await resume.save();
    await User.updateOne({ _id: userDetails._id }, { resume: resume._id });
    return NextResponse.json({
      success: true,
      msg: "",
      resume,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        msg: error?.message || "Something went wrong",
      },
      { status: error?.message ? 400 : 500 }
    );
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const userDetails = await auth();
    if (!userDetails) {
      throw new Error("Unauthorized");
    }
    const data = await req.json();
    const validatedResume = resumeSchema.safeParse(data);
    if (!validatedResume.success) {
      throw new Error("Invalid data");
    }
    await connectToDB();
    const resume = await Resume.findOne({ user: userDetails._id });
    if (!resume) {
      throw new Error("Resume not found");
    }
    await Resume.updateOne({ _id: resume._id }, { ...validatedResume?.data });
    return NextResponse.json({
      success: true,
      msg: "",
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        msg: error?.message || "Something went wrong",
      },
      { status: error?.message ? 400 : 500 }
    );
  }
};
