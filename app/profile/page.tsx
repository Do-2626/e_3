"use client";
import ProfileForm from "@/components/ProfileForm";
import { getUserDetails } from "@/lib/clientUltils/auth";
import { userDetailsType } from "@/types/types";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Triangle } from "react-loader-spinner";

interface profileProps {}

const Profile: FC<profileProps> = ({}) => {
  const router = useRouter();
  const [user, setUser] = useState<userDetailsType | null>(null);
  useEffect(() => {
    getUserDetails("self").then((res) => {
      if (res?.success && res?.body) {
        setUser(res.body);
      } else {
        toast.error(res?.msg);
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
  return (
    <div>
      <ProfileForm user={user} />
    </div>
  );
};

export default Profile;
