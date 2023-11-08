import { resumeSchema } from "@/ZodSchmeas/resume";
import { z } from "zod";

export type userType = {
  _id?: string;
  fullName: string;
  gender: "male" | "female";
  email: string;
  password?: string;
  mobile: string;
  dateOfBirth: Date;
  role: "user" | "hr" | "admin" | "super-admin";
  company?: string;
  activeStatus: boolean;
};
export type userQueryType = {
  fullName?: string | {};
  email?: string | {};
  mobile?: string | {};
  gender?: "male" | "female";
  role?: string | null;
  activeStatus?: boolean;
  deleted: boolean;
  company?: string;
  resume?: string;
  dateOfBirth?: string;
};

export type updateUser = {
  fullName?: string | {};
  email?: string | {};
  mobile?: string | {};
  gender?: "male" | "female";
  role?: string | null;
  activeStatus?: boolean;
  deleted?: boolean;
  company?: string;
  resume?: string;
  dateOfBirth?: string;
};

export type resumeType = z.infer<typeof resumeSchema>;
export type userDetailsType = userType & { resume: resumeType };
