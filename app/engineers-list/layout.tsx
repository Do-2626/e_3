"use client";
import { getUserData } from "@/lib/clientUltils/auth";
import { userType } from "@/types/types";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

interface layoutProps {
  children: React.ReactNode;
}

const EngineersListLayout: FC<layoutProps> = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState<userType | null>(null);

  useEffect(() => {
    (async () => {
      const { success, user } = await getUserData();

      if (success) {
        setUser(user);
      } else {
        router.push("/");
      }
    })();
  }, [router]);
  if (!user)
    return (
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
    );
  return <main className="">{children}</main>;
};

export default EngineersListLayout;
