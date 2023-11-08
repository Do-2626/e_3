import User from "@/DB/models/user.schema";
import { connectToDB } from "@/DB/utils/connect";
import { auth, generateToken } from "@/lib/serverUtils";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { default as bcrypt } from "bcryptjs";

export const GET = async (req: NextRequest) => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("E-Jobs");
    if (!token) {
      throw new Error("Unauthorized !!");
    }
    const user = await auth();
    user.password = null;
    delete user.password;
    return NextResponse.json({
      success: true,
      msg: "",
      user,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      msg: error?.message || "Something went wrong",
    });
  }
};
export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const { email, password } = data;
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    await connectToDB();
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Email or password is wrong !");
    }
    if (!(await bcrypt.compare(password, user.password!))) {
      throw new Error("Email or password is wrong !");
    }

    const token = generateToken({ userId: user._id });
    const cookieStore = cookies();
    cookieStore.set("E-Jobs", token, {
      secure: true,
    });
    return NextResponse.json({
      success: true,
      msg: "",
      // token: token,
      // user: {
      //   fullName: user.fullName,
      //   gender: user.gender,
      //   email: user.email,
      //   mobile: user.mobile,
      //   dateOfBirth: user.dateOfBirth,
      //   role: user.role,
      //   company: user?.company,
      //   resume: user?.resume,
      // },
    });
  } catch (error: any) {
    console.log(error?.message);
    return NextResponse.json(
      {
        success: false,
        msg: error?.message || "Something went wrong",
      },
      { status: error?.message ? 400 : 500 }
    );
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const cookieStore = cookies();

    cookieStore.delete("E-Jobs");

    console.log("cookie deleted");
    return NextResponse.json({ success: true, msg: "" });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      msg: error?.message || "Something went wrong",
    });
  }
};
