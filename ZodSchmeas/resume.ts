import z from "zod";

export const resumeSchema = z.object({
  address: z.object({
    country: z.string(),
    city: z.string(),
  }),
  dateAvailable: z.coerce.date().min(new Date()),
  // .refine(
  //   (data) => {
  //     if (dateSchema.safeParse(new Date(data)).success) {
  //       return true;
  //     }
  //     return false;
  //   },
  //   {
  //     message: "Invalid Date ",
  //     path: ["dateOfBirth"],
  //   }
  // ),
  //   dateAvailable: z.string().transform((str) => new Date(str)),
  employeeStatus: z.enum(["employed", "unemployed"]),
  positionAppliedFor: z.string(),
  jobType: z.enum(["full-time", "part-time"]),
  education: z.object({
    college: z.string(),
    major: z.string(),
    university: z.string(),
    year: z.coerce.number().max(2023).min(1980),
    grade: z.coerce.number().min(50).max(100),
  }),
  workExperience: z.array(
    z.object({
      company: z.string(),
      position: z.string(),
      from: z.coerce.date(),
      to: z.union([z.coerce.date(), z.literal("until-now")]),
    })
  ),
  resumeLink: z.string().optional(),
  license: z.array(z.string()),
  static: z.boolean().optional(),
});
const dateSchema = z
  .date()
  .min(new Date("1950-01-01"))
  .max(new Date("2020-12-31"));
export const userSchema = z
  .object({
    fullName: z.string().min(3, {
      message: "Full Name must be at least 3 characters.",
    }),
    email: z.string().email().min(2, {
      message: "email must be at least 4 characters.",
    }),
    password: z.string().min(6, {
      message: "password must be at least 6 characters.",
    }),
    confirmPassword: z.string(),
    gender: z.enum(["male", "female"]),
    mobile: z.string().refine((data) => {
      let regex = new RegExp(/^01[0125][0-9]{8}$/gm);
      return regex.test(data);
    }, "Invalid Egyptian Mobile Number"),

    dateOfBirth: z.coerce.date(),
    // company: z.string().optional(),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  )

  .refine(
    (data) => {
      if (dateSchema.safeParse(new Date(data.dateOfBirth)).success) {
        return true;
      }
      return false;
    },
    {
      message: "Invalid Date of Birth",
      path: ["dateOfBirth"],
    }
  );

const personalInfoSchema = z.object({
  fullName: z.string().min(3, {
    message: "Full Name must be at least 3 characters.",
  }),
  email: z.string().email().min(2, {
    message: "email must be at least 4 characters.",
  }),
  // password: z.string().min(6, {
  //   message: "password must be at least 6 characters.",
  // }),
  // confirmPassword: z.string(),
  gender: z.enum(["male", "female"]),
  mobile: z.string().refine((data) => {
    let regex = new RegExp(/^01[0125][0-9]{8}$/gm);
    return regex.test(data);
  }, "Invalid Egyptian Mobile Number"),

  dateOfBirth: z.coerce.date().refine(
    (data) => {
      if (dateSchema.safeParse(new Date(data)).success) {
        return true;
      }
      return false;
    },
    {
      message: "Invalid Date of Birth",
      path: ["dateOfBirth"],
    }
  ),
  // company: z.string().optional(),
});
export const userAndResmueSchema = personalInfoSchema.extend({
  resume: resumeSchema,
});
export type userAndResumeSchemaType = z.infer<typeof userAndResmueSchema>;
