import { userQueryType, userType } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/DB/models/user.schema";
import { connectToDB } from "@/DB/utils/connect";
import { cookies } from "next/headers";
export const validateRegistrationData = (data: userType | null) => {
  const validate = {
    msg: "",
    valid: true,
  };
  if (!data) {
    validate.valid = false;
    validate.msg = "Invalid Data";
    return validate;
  }
  if (!data?.fullName) {
    validate.msg = "Full Name is Required";
    validate.valid = false;
    return validate;
  }
  if (!data.gender) {
    validate.msg = "Gender is Required";
    validate.valid = false;
    return validate;
  }
  if (data?.gender !== "male" && data?.gender !== "female") {
    validate.msg = "Gender must be male or female";
    validate.valid = false;
    return validate;
  }
  if (data?.fullName.length < 3) {
    validate.msg = "Full Name must be at least 3 characters";
    validate.valid = false;
    return validate;
  }

  if (!data?.email) {
    validate.msg = "Email is Required";
    validate.valid = false;
    return validate;
  }
  if (data?.email) {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (!regex.test(data.email)) {
      validate.msg = "Invalid Email";
      validate.valid = false;
      return validate;
    }
  }
  if (!data?.password) {
    validate.msg = "Password is Required";
    validate.valid = false;
    return validate;
  }
  if (data?.password.length < 6 || data?.password.length > 20) {
    validate.msg =
      "Password must be greater than 6 and less than 20 characters";
    validate.valid = false;
    return validate;
  }
  if (!data?.mobile) {
    validate.msg = "Mobile is Required";
    validate.valid = false;
    return validate;
  }
  if (data.mobile) {
    let regex = new RegExp(/^01[0125][0-9]{8}$/gm);
    if (!regex.test(data.mobile)) {
      validate.msg = "Invalid Mobile Number";
      validate.valid = false;
      return validate;
    }
  }

  if (!data?.dateOfBirth) {
    validate.msg = "Date of Birth is Required";
    validate.valid = false;
    return validate;
  }

  return validate;
};

export const generateToken = (data: {}) => {
  const jwt_secret = process.env.JWT_SECRET || "AIN_JWT_SECRET";
  const token = jwt.sign(data, jwt_secret, { expiresIn: "1w" });

  return token;
};

export const verifyToken = (token: string) => {
  const jwt_secret = process.env.JWT_SECRET || "AIN_JWT_SECRET";
  const decoded = jwt.verify(token, jwt_secret);
  if (!decoded) {
    throw new Error("Invalid Token");
  }
  return decoded;
};

export const auth = async () => {
  // const token = req.headers.get("authorization");
  // if (!token) {
  //   throw new Error("Invalid Token");
  // }
  const cookieStore = cookies();
  const token = cookieStore.get("E-Jobs");
  if (!token) {
    throw new Error("Invalid Token");
  }
  const decoded: any = verifyToken(token?.value);

  if (!decoded) {
    throw new Error("Invalid Token");
  }
  await connectToDB();
  const user = await User.findOne({
    _id: decoded.userId,
    deleted: false,
    activeStatus: true,
  });
  if (!user) {
    throw new Error("User not found or Blocked");
  }
  return user;
};

export const transformToUserQuery = (req: NextRequest, user: userType) => {
  const reqQuery = req.nextUrl.searchParams;
  const query: userQueryType = {
    deleted: false,
    role: "user",
  };
  if (user.role === "hr") {
    query.activeStatus = true;
  }
  if (reqQuery.get("name")) {
    query.fullName = {
      $regex: ".*" + reqQuery.get("name") + ".*",
      $options: "i",
    };
  }
  if (reqQuery.get("email")) {
    query.email = {
      $regex: ".*" + reqQuery.get("email") + ".*",
      $options: "i",
    };
  }
  if (reqQuery.get("mobile")) {
    query.mobile = {
      $regex: ".*" + reqQuery.get("mobile") + ".*",
      $options: "i",
    };
  }

  if (reqQuery.get("gender")) {
    if (reqQuery.get("gender") === "male") {
      query.gender = "male";
    } else if (reqQuery.get("gender") === "female") {
      query.gender = "female";
    }
  }

  if (reqQuery.get("role")) {
    if (user.role === "super-admin") {
      query.role = reqQuery.get("role");
    } else if (
      (user.role === "admin" && reqQuery.get("role") === "user") ||
      reqQuery.get("role") === "hr"
    ) {
      query.role = reqQuery.get("role");
    } else if (user.role === "hr" && reqQuery.get("role") === "user") {
      query.role = "user";
    }
  }

  if (reqQuery.get("active") === "true") {
    query.activeStatus = true;
  }
  if (reqQuery.get("active") === "false") {
    query.activeStatus = false;
  }
  return query;
};

export const validateUpdateUserData = (data: userType | null) => {
  const updateUserData: userType = {} as userType;

  if (!data) {
    throw new Error("Data Not Found");
  }
  if (
    data?.fullName &&
    typeof data?.fullName === "string" &&
    data?.fullName.length >= 3
  ) {
    updateUserData.fullName = data?.fullName.trim();
  }

  if (data?.gender === "male" || data?.gender === "female") {
    updateUserData.gender = data?.gender;
  }
  if (data.mobile) {
    let regex = new RegExp(/^01[0125][0-9]{8}$/gm);
    if (!regex.test(data.mobile)) {
      throw new Error("Invalid Mobile Number");
    }
    updateUserData.mobile = data?.mobile;
  }

  if (data?.dateOfBirth) {
    const date = new Date(data?.dateOfBirth);
    if (!date) {
      throw new Error("Invalid Date of Birth");
    }
    updateUserData.dateOfBirth = date;
  }

  return updateUserData;
};
