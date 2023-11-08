"use client";
import { getUserData } from "@/lib/clientUltils/auth";
import { userType } from "@/types/types";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

interface profileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: FC<profileLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<userType | null>(null);
  useEffect(() => {
    getUserData().then((res) => {
      if (res?.success && res?.user) {
        setUser(res.user);
      } else {
        router.push("/user/login");
      }
    });
  }, []);

  if (!user) {
    return (
      <div>
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
      </div>
    );
  }
  return user && <div>{children}</div>;
};

export default ProfileLayout;
