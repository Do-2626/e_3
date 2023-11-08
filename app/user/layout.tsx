"use client";
import { getUserData } from "@/lib/clientUltils/auth";
import { userType } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import bg from "@/public/register.jpg";
import { Triangle } from "react-loader-spinner";
interface layoutProps {
  children: React.ReactNode;
}

const LoginLayout = ({ children }: layoutProps) => {
  const router = useRouter();
  const [user, setUser] = useState<userType | null | "loading">("loading");
  useEffect(() => {
    getUserData()
      .then((res) => {
        console.log({ res });
        if (res?.success && res?.user) {
          router.push("/");
          // setUser(res.user);
        } else {
          console.log("err");
          setUser(null);
        }
      })
      .catch((err) => {});
  }, [router]);
  return (
    <div
      style={{ minHeight: "140vh", backgroundImage: `url(${bg.src})` }}
      className=" z-1 bg-fixed bg-cover   "
    >
      <div className="container">
        {user === "loading" ? (
          <Triangle
            height="600"
            width="600"
            color="#90B1DB"
            wrapperClass="text- flex justify-center items-center h-screen"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            // wrapperClassName=""
            visible={true}
          />
        ) : (
          <div className="   h-[110vh]  flex justify-center  lg:justify-end items-center">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginLayout;
