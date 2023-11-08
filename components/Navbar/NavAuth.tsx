"use client";
import { FC, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { getUserData, logOut } from "@/lib/clientUltils/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { userType } from "@/types/types";
import { ThreeDots } from "react-loader-spinner";
import toast from "react-hot-toast";
interface NavAuthProps {}

const NavAuth: FC<NavAuthProps> = ({}) => {
  const router = useRouter();
  const [user, setUser] = useState<userType | null | "loading">("loading");
  const [callBack, setCallBack] = useState(false);
  useEffect(() => {
    getUserData()
      .then((res) => {
        console.log({ res });
        if (res?.success && res?.user) {
          toast.success("Welcome " + res.user.fullName);
          // router.push("/");
          setUser(res.user);
        } else {
          console.log("err");
          setUser(null);
        }
      })
      .catch((err) => {});
  }, [callBack, router]);
  const handleLogout = async () => {
    const res = await logOut();
    if (res?.success) {
      setCallBack(!callBack);
      router.replace("/");
    }
  };
  return (
    <div className="flex sm:justify-evenly  items-baseline gap-3 relative">
      {user === "loading" ? (
        <ThreeDots
          height="40"
          width="80"
          radius="9"
          color="#90B1DB"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          // wrapperClassName=""
          visible={true}
        />
      ) : user === null ? (
        <div className="space-x-3 absolute left-0 md:-left-16">
          <Link
            className="bg-gradient-44 py-2 px-4 text-white mx-2 border border-white rounded-3xl"
            href={"/user/login"}
          >
            Sign in
          </Link>
          <Link
            className="bg-gradient-44 py-2 px-3 text-white mx-2 border border-white rounded-3xl"
            href={"/user/register"}
          >
            Sing up
          </Link>
        </div>
      ) : (
        <div className="space-x-3 relative ">
          <div className="m-3 p-2 text-end absolute -top-36 -right-16">
            <Button
              className="bg-transparent  py-2 px-4 text-red-600 mx-2 border border-white rounded-3xl font-semibold"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>

          {user.role !== "user" && (
            <Link
              className="bg-gradient-44 py-2 px-4 text-white mx-2 border border-white rounded-3xl"
              href={`/engineers-list`}
            >
              Resumes-List
            </Link>
          )}
          <Link
            className="bg-gradient-44 py-2 px-4 text-white mx-2 border border-white rounded-3xl"
            href={`/profile/self`}
          >
            Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavAuth;
