import { userDetailsType } from "@/types/types";
import { FC, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userAndResmueSchema } from "@/ZodSchmeas/resume";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import toast from "react-hot-toast";

interface ProfileFormProps {
  user: userDetailsType;
}

const ProfileForm: FC<ProfileFormProps> = ({ user }) => {
  const [callBack, setCallBack] = useState(false);
  useEffect(() => {}, [callBack]);
  const router = useRouter();
  const form = useForm<userDetailsType>({
    resolver: zodResolver(userAndResmueSchema),
    defaultValues: user,
  });
  const { formState, getValues, register, handleSubmit, setValue } = form;
  const onSubmit = async (data: userDetailsType) => {
    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        body: JSON.stringify(data),
      });
      const response = await res.json();
      if (response?.success) {
        toast.success("Updated Successfully");
        router.push("/");
      } else {
        toast.error(response?.msg);
      }
    } catch (error: any) {
      console.log(error?.message);
      toast.error(error?.message);
    }
  };

  return (
    <div className=" container p-2  ">
      <div className="">
        <h2 className="text-2xl  text-center my-2 ">Update Profile </h2>
      </div>
      <div className="flex  justify-center max-w-[400px] m-auto ">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className=" border px-4 py-2 rounded">
            <h3 className="text-md m-3  text-center">Personal informations</h3>

            <div>
              <h2 className="text-md ">Full Name</h2>
              <Input
                type="text"
                {...register("fullName")}
                placeholder="Full Name"
              />
              <span className="text-red-500 p-2 ">
                {formState.errors.fullName?.message}
              </span>
            </div>
            <div>
              <h2 className="text-md ">E-mail Address</h2>

              <Input
                type="text"
                {...register("email")}
                placeholder="email"
                disabled
              />
              <span className="text-red-500 p-2">
                {formState.errors.email?.message}
              </span>
            </div>
            <div>
              <h2 className="text-md ">Mobile Number</h2>

              <Input
                type="text"
                {...register("mobile")}
                placeholder="Mobile Number"
              />
              <span className="text-red-500 p-2">
                {formState.errors.mobile?.message}
              </span>
            </div>
            <div className=" ">
              <p className="text-xl ">Select Your Gender</p>

              <RadioGroup
                defaultValue={user.gender}
                className="p-2"
                onValueChange={(e: "male" | "female") =>
                  setValue("gender", e, { shouldValidate: true })
                }
              >
                <div className="flex space-x-5 justify-center">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="r1" />
                    <Label htmlFor="r1">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="r2" />
                    <Label htmlFor="r2">Female</Label>
                  </div>
                </div>
              </RadioGroup>
              <span className="text-red-500 p-2">
                {formState.errors.gender?.message}
              </span>
            </div>
            <div>
              <h2 className="text-md ">Date of Birth</h2>

              <Input
                type="date"
                min={"1950-01-01"}
                max={"2020-01-01"}
                className=""
                placeholder="ex: 1996-01-01"
                // {...field}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  form.setValue("dateOfBirth", new Date(e.target.value), {
                    shouldValidate: true,
                  });
                }}
              />
              <span className="text-red-500 p-2">
                {formState.errors.dateOfBirth?.message}
              </span>
            </div>
          </div>

          <div className="border px-4 py-2 rounded">
            <h3 className="text-md m-3 ">Resume informations</h3>

            <div>
              <h2 className="text-md ">Country</h2>

              <Input
                type="text"
                {...register("resume.address.country")}
                placeholder="Country Name"
                disabled
              />
              <span className="text-red-500 p-2">
                {formState.errors.resume?.address?.message}
              </span>
            </div>

            <div>
              <h2 className="text-md ">City</h2>

              <Input
                type="text"
                {...register("resume.address.city")}
                placeholder="City Name"
              />
              <span className="text-red-500 p-2">
                {formState.errors.resume?.address?.country?.message}
              </span>
            </div>
            <div className=" ">
              <p className="text-xl text-center">Employee Status</p>

              <RadioGroup
                defaultValue={user.resume?.employeeStatus}
                className="m-2"
                onValueChange={(e: "employed" | "unemployed") =>
                  setValue("resume.employeeStatus", e, { shouldValidate: true })
                }
              >
                <div className="flex space-x-5 justify-center ">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="employed" id="employed" />
                    <Label htmlFor="employed">Employed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="unemployed" id="unemployed" />
                    <Label htmlFor="unemployed">Unemployed</Label>
                  </div>
                </div>
              </RadioGroup>
              <span className="text-red-500 p-2">
                {formState.errors.resume?.employeeStatus?.message}
              </span>
            </div>
            {/* <div>
              <h2 className="text-md ">Company</h2>

              <Input
                type="text"
                disabled={form.watch("resume.employeeStatus") !== "employed"}
                {...register("company")}
                placeholder="Company Name"
              />
              <span className="text-red-500 p-2">
                {formState.errors.company?.message}
              </span>
            </div> */}
            <div>
              <h2 className="text-md ">Available date to start process</h2>

              <Input
                type="date"
                min={new Date().toString().split("T")[0]}
                // max={"2020-01-01"}
                className=""
                placeholder="ex: 1996-01-01"
                // {...field}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  form.setValue(
                    "resume.dateAvailable",
                    new Date(e.target.value),
                    { shouldValidate: true }
                  );
                }}
              />
              <span className="text-red-500 p-2 ">
                {formState.errors.resume?.dateAvailable?.message}
              </span>
            </div>
            <div>
              <h2 className="text-md ">Position you applying for</h2>

              <Input
                type="text"
                {...register("resume.positionAppliedFor")}
                placeholder="Position Applied For"
              />
              <span className="text-red-500 p-2">
                {formState.errors.resume?.positionAppliedFor?.message}
              </span>
            </div>

            <div className=" ">
              <p className="text-xl text-center">Job Type </p>

              <RadioGroup
                defaultValue={user.resume?.jobType}
                className="m-2"
                onValueChange={(e: "part-time" | "full-time") =>
                  setValue("resume.jobType", e, { shouldValidate: true })
                }
              >
                <div className="flex space-x-5 justify-center ">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="part-time" id="part-time" />
                    <Label htmlFor="part-time">Part-time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="full-time" id="full-time" />
                    <Label htmlFor="full-time">Full-time</Label>
                  </div>
                </div>
              </RadioGroup>
              <span className="text-red-500 p-2">
                {formState.errors.resume?.jobType?.message}
              </span>
            </div>
          </div>

          <div className="border px-4 py-2 rounded">
            <h3 className="text-md m-3 ">Education informations</h3>

            <div>
              <h2 className="text-md ">University</h2>

              <Input
                type="text"
                {...register("resume.education.university")}
                placeholder="University Name"
              />
              <span className="text-red-500 p-2">
                {formState.errors.resume?.education?.university?.message}
              </span>
            </div>

            <div>
              <h2 className="text-md ">College</h2>

              <Input
                type="text"
                {...register("resume.education.college")}
                placeholder="College Name"
              />
              <span className="text-red-500 p-2">
                {formState.errors.resume?.education?.college?.message}
              </span>
            </div>

            <div>
              <h2 className="text-md ">Field</h2>

              <Input
                type="text"
                {...register("resume.education.major")}
                placeholder="Field of Study"
              />
              <span className="text-red-500 p-2">
                {formState.errors.resume?.education?.major?.message}
              </span>
            </div>
            <div>
              <h2 className="text-md ">Graduation Year</h2>

              <Input
                type="text"
                {...register("resume.education.year")}
                placeholder="Graduation Year"
              />
              <span className="text-red-500 p-2">
                {formState.errors.resume?.education?.year?.message}
              </span>
            </div>
            <div>
              <h2 className="text-md ">Percentage Grade</h2>

              <Input
                type="text"
                {...register("resume.education.grade")}
                placeholder="Percentage Grade"
              />
              <span className="text-red-500 p-2">
                {formState.errors.resume?.education?.grade?.message}
              </span>
            </div>
          </div>
          <div className="border px-4 py-2 rounded ">
            <h3 className="text-md m-3 ">Work Experience informations</h3>
            <div className="  border-y space-y-1 ">
              {getValues().resume?.workExperience?.map((e, i) => (
                <div key={i} className="border p-2">
                  <div className="">
                    <h2 className="text-md ">Company</h2>
                    <Input
                      type="text"
                      className="w-full"
                      {...register(`resume.workExperience.${i}.company`)}
                      placeholder="Company Name"
                    />
                    <span className="text-red-500 p-2">
                      {
                        formState.errors.resume?.workExperience?.message //!
                      }
                    </span>
                  </div>
                  <div className="">
                    <h2 className="text-md ">Position</h2>
                    <Input
                      type="text"
                      className="w-full"
                      {...register(`resume.workExperience.${i}.position`)}
                      placeholder="Position"
                    />
                    <span className="text-red-500 p-2">
                      {
                        formState.errors.resume?.workExperience?.message //!
                      }
                    </span>
                  </div>
                  <div>
                    <div className=" grid grid-cols-5  items-baseline">
                      <h2 className="text-lg col-span-1  ">From :</h2>

                      <Input
                        type="date"
                        max={new Date().toString().split("T")[0]}
                        className="w-full col-span-3"
                        placeholder="ex: 2015-01-01"
                        // {...field}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          form.setValue(
                            `resume.workExperience.${i}.from`,
                            new Date(e.target.value),
                            { shouldValidate: true }
                          );
                        }}
                      />
                    </div>
                    <div>
                      <span className="text-red-500 p-2 ">
                        {
                          !formState?.errors?.resume?.workExperience
                            ? null
                            : formState?.errors?.resume?.workExperience[i]?.from
                                ?.message //!
                        }
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className=" grid grid-cols-5  items-baseline">
                      <h2 className="text-lg col-span-1  ">To :</h2>
                      <Input
                        type="date"
                        max={new Date().toString().split("T")[0]}
                        className="w-full col-span-3"
                        placeholder="ex: 2015-01-01"
                        disabled={
                          form.watch(`resume.workExperience.${i}.to`) ===
                          "until-now"
                        }
                        // {...field}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          if (new Date(e.target.value)) {
                            form.setValue(
                              `resume.workExperience.${i}.to`,
                              new Date(e.target.value),
                              { shouldValidate: true }
                            );
                          }
                        }}
                      />
                      <div className="col-span-5">
                        <label
                          htmlFor={`resume.workExperience.${i}.to`}
                          className="  m-2 text-md"
                        >
                          <input
                            id={`resume.workExperience.${i}.to`}
                            className="p-2 m-2 rounded "
                            value={
                              getValues().resume?.workExperience?.[
                                i
                              ]?.to.toString() || Date.now()
                            }
                            type="checkbox"
                            defaultChecked={
                              (typeof form.getValues().resume?.workExperience?.[
                                i
                              ]?.to === "string" &&
                                form.getValues().resume?.workExperience?.[i]
                                  ?.to === "until-now") ||
                              false
                            }
                            // {...field}
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              form.setValue(
                                `resume.workExperience.${i}.to`,
                                e.target.checked === true
                                  ? "until-now"
                                  : new Date(),
                                { shouldValidate: true }
                              );
                            }}
                          />
                          Until Now
                        </label>
                      </div>
                    </div>
                    <div>
                      <span className="text-red-500 p-2">
                        {formState.errors.resume?.workExperience?.message}
                      </span>
                    </div>
                  </div>
                  <div className="text-end px-3">
                    <Button
                      type="button"
                      className="ml-auto "
                      onClick={() => {
                        const filterdData =
                          getValues().resume.workExperience?.filter(
                            (e, j) => j !== i
                          );
                        setValue("resume.workExperience", filterdData, {
                          shouldTouch: true,
                        });
                        setCallBack(!callBack);
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              <div className="flex justify-center">
                <Button
                  type="button"
                  className="bg-green-800 "
                  onClick={() => {
                    const values = getValues().resume?.workExperience;
                    setValue(
                      "resume.workExperience",
                      [
                        ...values,
                        {
                          company: "",
                          position: "",
                          from: new Date(),
                          to: new Date(),
                        },
                      ],
                      {
                        shouldValidate: true,
                      }
                    );
                  }}
                >
                  Add Work Experience
                </Button>
              </div>
            </div>
          </div>
          <div className="border px-4 py-2 rounded">
            <h3 className="text-md m-3  border-b">Links </h3>
            <div>
              <h2 className="text-md m-3 ">Resume Link</h2>

              <Input
                type="text"
                {...register("resume.resumeLink")}
                placeholder="Resume Link"
              />
              <span className="text-red-500 p-2">
                {formState.errors.resume?.resumeLink?.message}
              </span>
            </div>
            <div className="  border-y space-y-1 ">
              <h2 className="text-md m-3 ">Licenses Links</h2>
              {getValues().resume?.license?.map((e, i) => (
                <div className="flex" key={i}>
                  <Input
                    type="text"
                    className="w-full"
                    {...register(`resume.license.${i}`)}
                    placeholder="License Link"
                  />
                  <span className="text-red-500 p-2">
                    {formState.errors.resume?.license?.message}
                  </span>
                  <Button
                    type="button"
                    onClick={() => {
                      const filtredData = getValues().resume.license?.filter(
                        (e, j) => j !== i
                      );
                      setValue("resume.license", filtredData, {
                        shouldValidate: true,
                      });
                      setCallBack(!callBack);
                    }}
                  >
                    &times;
                  </Button>
                </div>
              ))}
              <div>
                <Button
                  type="button"
                  onClick={() => {
                    const values = getValues().resume?.license;
                    setValue("resume.license", [...values, ""], {
                      shouldValidate: true,
                    });
                  }}
                >
                  Add Link
                </Button>
              </div>
            </div>
          </div>

          <Button type="submit">Update your informations</Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
