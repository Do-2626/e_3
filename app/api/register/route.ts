import { connectToDB } from "@/DB/utils/connect";
import { generateToken, validateRegistrationData } from "@/lib/serverUtils";
import { NextRequest, NextResponse } from "next/server";
import { default as bcrypt } from "bcryptjs";
import User from "@/DB/models/user.schema";
import { cookies } from "next/headers";
import Resume from "@/DB/models/resume.schema";
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const validate = validateRegistrationData(body);

    if (!validate.valid) {
      return NextResponse.json({ success: false, msg: validate.msg });
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    await connectToDB();
    const userExisted = await User.findOne({ email: body.email });
    if (userExisted) {
      return NextResponse.json({ success: false, msg: "User Already Exist" });
    }
    const user = new User({
      fullName: body.fullName.trim(),
      gender: body.gender,
      email: body.email,
      password: hashedPassword,
      mobile: body.mobile,
      dateOfBirth: new Date(body.dateOfBirth),
      role: body.role,
      company: body.company,
      resume: body.resume,
      preferredUsers: body.preferredUsers,
    });
    const initialResume = new Resume({
      user: user._id,
      address: {
        country: "Egypt",
        city: "",
      },
      employeeStatus: "unemployed",
      positionAppliedFor: "",
      jobType: "full-time",
      education: { college: "", major: "", university: "", year: 0, grade: 0 },
      workExperience: [],
      resumeLink: "",
      license: [],
    });
    await initialResume.save();
    user.resume = initialResume._id;
    await user.save();
    const token = generateToken({ userId: user._id });
    const cookieStore = cookies();
    cookieStore.set("E-Jobs", token, {
      secure: true,
    });
    return NextResponse.json({
      success: true,
      msg: "",
      // token: token,
    });
  } catch (error: any) {
    console.log(error?.message);
    NextResponse.json(
      {
        success: false,
        msg: error?.message || "Something went wrong",
      },
      { status: error?.message ? 400 : 500 }
    );
  }
};
