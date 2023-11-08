"use client";
import { userAndResumeSchemaType } from "@/ZodSchmeas/resume";
import TextWrapper from "@/components/TextWrapper";
import { Button } from "@/components/ui/button";
import { getUserDetails } from "@/lib/clientUltils/auth";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface profileProps {
  params: {
    id: string;
  };
}

const ProfileDetails: FC<profileProps> = ({ params }) => {
  const [user, setUser] = useState<
    (userAndResumeSchemaType & { role: string }) | null
  >(null);

  useEffect(() => {
    getUserDetails(params.id).then((res) => {
      if (res?.success && res?.body) {
        setUser(res.body);
      } else {
        toast.error(res?.msg);
      }
    });
  }, [params.id]);

  return (
    <div className="container p-2   shadow-2xl ">
      <div className="text-end m-2">
        <Button
          disabled={params.id !== "self"}
          variant={"outline"}
          className=""
        >
          <Link href={"/profile"}>Update Profile</Link>
        </Button>
      </div>
      {user && (
        <div className=" overflow-hidden  ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="p-2 border shadow-md">
              <div className="flex justify-center p-2">
                <Image
                  src={`/${user.role}-icon.png`}
                  width={175}
                  height={175}
                  alt="Eng-Icon"
                  className="rounded-full"
                />
              </div>
              <div className="p-2 space-y-2 ">
                <TextWrapper
                  title="Full Name"
                  value={user.fullName}
                  parentClassName="  "
                />

                <TextWrapper
                  title="Email"
                  value={user.email}
                  parentClassName="  "
                />
                <TextWrapper
                  title="Gender"
                  value={
                    user.gender.charAt(0).toUpperCase() + user.gender.slice(1)
                  }
                  parentClassName="  "
                />
                <TextWrapper
                  title="Mobile Number"
                  value={user.mobile}
                  parentClassName="  "
                />
                <TextWrapper
                  title="Date Of Birth"
                  value={user.dateOfBirth.toString().split("T")[0]}
                  parentClassName="  "
                />
                <TextWrapper
                  title="Role"
                  value={user.role}
                  parentClassName="  "
                />
              </div>
            </div>
            {!user.resume?.static && (
              <>
                <div className="p-2 border shadow-md ">
                  <div className="p-2 space-y-2">
                    <TextWrapper
                      title="Country"
                      value={user.resume.address.country}
                      parentClassName="  "
                    />
                    <TextWrapper
                      title="City"
                      value={user.resume.address.city}
                      parentClassName="  "
                    />
                    <TextWrapper
                      title="University"
                      value={user.resume?.education?.university}
                      parentClassName="  "
                    />
                    <TextWrapper
                      title="College"
                      value={user.resume?.education?.college}
                      parentClassName="  "
                    />
                    <TextWrapper
                      title="Field Of Study"
                      value={user.resume?.education?.major}
                      parentClassName="  "
                    />
                    <TextWrapper
                      title="Graduation Year"
                      value={user.resume?.education?.year.toString()}
                      parentClassName="  "
                    />
                    <TextWrapper
                      title="Grade"
                      value={
                        user.resume?.education?.grade.toFixed(2).toString() +
                        "%"
                      }
                      parentClassName="  "
                    />
                    <TextWrapper
                      title="Employee Status"
                      value={
                        user.resume?.employeeStatus.charAt(0).toUpperCase() +
                        user.resume?.employeeStatus.slice(1)
                      }
                      parentClassName="  "
                    />
                    <TextWrapper
                      title="Available  on"
                      value={
                        user.resume?.dateAvailable?.toString().split("T")[0] ||
                        "No Info"
                      }
                      parentClassName="  "
                    />
                    <TextWrapper
                      title="Applied For"
                      value={
                        user.resume?.positionAppliedFor
                          .charAt(0)
                          .toUpperCase() +
                        user.resume?.positionAppliedFor.slice(1)
                      }
                      parentClassName="  "
                    />
                    <TextWrapper
                      title="Job Type"
                      value={
                        user.resume?.jobType.charAt(0).toUpperCase() +
                        user.resume?.jobType.slice(1)
                      }
                      parentClassName="  "
                    />
                  </div>
                </div>
                <div className="p-2 border shadow-md">
                  <div className=" p-2 space-y-2">
                    <div className="p-2">
                      <h3 className=" text-center ">Work Experience</h3>
                      <div className="">
                        {user.resume?.workExperience?.map((item, index) => (
                          <div className="p-2 border shadow my-2 " key={index}>
                            <TextWrapper
                              title="Company Name"
                              value={item?.company}
                              parentClassName="  "
                            />
                            <TextWrapper
                              title="Position"
                              value={item.position}
                              parentClassName="  "
                            />
                            <TextWrapper
                              title="Start Date"
                              value={item?.from.toString().split("T")[0]}
                              parentClassName="  "
                            />
                            <TextWrapper
                              title="End Date"
                              value={item?.to.toString().split("T")[0]}
                              parentClassName="  "
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className=" text-center ">Resume Link</h3>
                      <a
                        href={user.resume?.resumeLink}
                        className="text-amber-900 font-semibold"
                        target="_blank"
                      >
                        {user.resume?.resumeLink}
                      </a>
                    </div>
                    <div>
                      <h3 className=" text-center ">License Links</h3>
                      {user.resume?.license?.map((item, index) => (
                        <div className="" key={index}>
                          <a
                            href={item}
                            className="text-amber-900 font-semibold"
                            target="_blank"
                          >
                            {item}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          {user.resume?.resumeLink && (
            <div className="container p-2">
              <h2 className="text-center  text-2xl">Resume</h2>
              <iframe
                src={user.resume?.resumeLink.replace("view", "preview")}
                className="w-full  h-[100vh] "
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
