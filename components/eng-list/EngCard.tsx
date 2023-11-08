"use client";
import { updateUser, userType } from "@/types/types";
import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import toast from "react-hot-toast";
interface EngCardProps {
  eng: userType;
  user: userType;
  fallBack: boolean;
  setFallBack: React.Dispatch<React.SetStateAction<boolean>>;
}

const EngCard: FC<EngCardProps> = ({
  eng,
  user,
  fallBack,
  setFallBack,
}: EngCardProps) => {
  const icon = eng.role;

  const handleDelete = async () => {
    if (!window.confirm("Are you sure?")) return;
    try {
      if (!window.confirm("Are you sure?")) return;
      const res = await fetch(`/api/user/${eng._id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setFallBack(!fallBack);
        toast.success("Deleted Successfully");
      } else {
        toast.error(data.msg);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleUpdateUser = async (updatedData: updateUser) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      const res = await fetch(`/api/user/${eng._id}`, {
        method: "PUT",
        body: JSON.stringify(updatedData),
      });
      const data = await res.json();
      if (data.success) {
        setFallBack(!fallBack);
        toast.success("Updated Successfully");
      } else {
        toast.error(data.msg);
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div className=" grid grid-cols-5 md:grid-cols-10  border-b-2 my-2  text-white">
      <div className="col-span-5 md:col-span-3">
        <div className="flex">
          <Image
            src={`/${icon}-icon.png`}
            width={50}
            height={50}
            alt="Eng-Icon"
            className="rounded-full"
          />
          <Link href={`/profile/${eng?._id}`}>
            <p className="font-bold">{eng?.fullName}</p>
            <p>{eng?.email}</p>
          </Link>
        </div>
      </div>
      {user.role === "admin" || user.role === "super-admin" ? (
        <div className="col-span-5 md:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="space-x-2 ">
              {user.role === "super-admin" && eng?.role !== "admin" && (
                <Button
                  className="bg-transparent rounded-2xl border-2 border-white text-white "
                  onClick={() => handleUpdateUser({ role: "admin" })}
                >
                  Admin
                </Button>
              )}

              {(user.role === "super-admin" || user.role === "admin") &&
                eng?.role === "user" && (
                  <Button
                    className="bg-transparent rounded-2xl border-2 border-white text-green-400 "
                    onClick={() => handleUpdateUser({ role: "hr" })}
                  >
                    HR
                  </Button>
                )}

              {eng?.role !== "user" && (
                <Button
                  className="bg-transparent rounded-2xl border-2 border-white text-green-400"
                  onClick={() => handleUpdateUser({ role: "user" })}
                >
                  User
                </Button>
              )}
            </div>
            <div className=" space-x-3 max-sm:space-y-2">
              <Button
                className="bg-transparent rounded-2xl border-2 border-white text-orange-600"
                onClick={() =>
                  handleUpdateUser({ activeStatus: !eng.activeStatus })
                }
              >
                {eng.activeStatus ? `Block ` : `Unblock `}
              </Button>
              {user.role === "super-admin" && (
                <Button
                  className="bg-transparent rounded-2xl border-2 border-white text-red-600"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EngCard;
