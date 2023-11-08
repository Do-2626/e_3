import Resume from "@/DB/models/resume.schema";
import User from "@/DB/models/user.schema";
import { auth } from "@/lib/serverUtils";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const user = await auth();
    if (!user) {
      throw new Error("Unauthorized");
    }
    const id = params.id;
    if (id !== "self") {
      if (
        user.role !== "hr" &&
        user.role !== "admin" &&
        user.role !== "super-admin" &&
        String(user._id) !== params.id
      ) {
        throw new Error("Unauthorized");
      }
    }

    const query = { _id: id, deleted: false };
    if (id === "self") {
      query._id = user._id;
    } else if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID");
    }

    const userDetails = await User.findOne(query, { password: 0 });
    // .populate(
    //   "resume"
    // );

    if (!userDetails) {
      throw new Error("User not found");
    }
    const existedResume = await Resume.findOne({ _id: userDetails.resume });

    return NextResponse.json({
      success: true,
      msg: "",
      body: { ...userDetails._doc, resume: existedResume || {} },
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

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const user = await auth();
    if (!user) {
      throw new Error("Unauthorized");
    }
    if (user.role !== "admin" && user.role !== "super-admin") {
      throw new Error("Unauthorized");
    }
    const id = params.id;
    const body = await req.json();
    const query = {
      _id: id,
      deleted: false,
      activeStatus: true,
    };
    const updatedData: {
      role?: string;
      activeStatus?: boolean;
      deleted?: boolean;
    } = {};

    if (body?.role && body?.role === "user") {
      updatedData.role = "user";
    }
    if (body?.role && body?.role === "hr") {
      updatedData.role = "hr";
    }
    if (body?.role && body?.role === "admin") {
      if (user.role === "super-admin") {
        updatedData.role = "admin";
      }
    }
    if (body?.activeStatus) {
      query.activeStatus = !body.activeStatus;
      updatedData.activeStatus = body.activeStatus;
    }
    const userData = await User.findOne(query);
    if (!userData) {
      throw new Error("User not found");
    }
    if (typeof body?.activeStatus === "boolean") {
      updatedData.activeStatus = body.activeStatus;
    }

    await User.updateOne({ _id: id, deleted: false }, updatedData);
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

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const user = await auth();
    if (!user) {
      throw new Error("Unauthorized");
    }

    if (user.role !== "super-admin") {
      throw new Error("Unauthorized");
    }
    const id = params.id;
    await User.updateOne({ _id: id }, { deleted: true });

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
