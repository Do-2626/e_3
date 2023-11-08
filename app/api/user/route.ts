import Resume from "@/DB/models/resume.schema";
import User from "@/DB/models/user.schema";
import { connectToDB } from "@/DB/utils/connect";
import { userAndResmueSchema } from "@/ZodSchmeas/resume";
import {
  auth,
  transformToUserQuery,
  validateUpdateUserData,
} from "@/lib/serverUtils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    // await connectToDB();
    const user = await auth();
    if (!user) {
      throw new Error("Unauthorized");
    }
    if (
      user.role !== "hr" &&
      user.role !== "admin" &&
      user.role !== "super-admin"
    ) {
      throw new Error("Unauthorized");
    }
    const query = transformToUserQuery(req, user);

    const users = await User.find(query, { password: 0 }).lean();
    return NextResponse.json({
      success: true,
      msg: "",
      users: users,
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
    const user = await auth();
    if (!user) {
      throw new Error("Unauthorized");
    }
    const body = await req.json();

    const result = userAndResmueSchema.safeParse(body);
    if (!result.success) {
      throw new Error("Invalid data");
    }

    await connectToDB();
    let userExisted = await User.findOne({ _id: user._id });
    if (!userExisted) {
      throw new Error("User not found");
    }
    const updatedUserData = { ...result.data, resume: userExisted.resume };
    if (userExisted?.resume) {
      await Resume.updateOne({ _id: user.resume }, result.data.resume);
    } else {
      const newResume = await Resume.create(result.data.resume);
      updatedUserData.resume = newResume._id;
    }

    await User.updateOne({ _id: user._id }, updatedUserData);
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
