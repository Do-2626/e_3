"use client";
import { FC, useEffect, useState } from "react";
import EngCard from "./EngCard";
import { userType } from "@/types/types";

interface EngListProps {
  url: string;
  user: userType;
}

const fetchEngList = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  if (data?.success && data?.users.length > 0) {
    return data.users;
  } else {
    return null;
  }
};
const EngList: FC<EngListProps> = ({ user, url }: EngListProps) => {
  const [engineers, setEngineers] = useState<userType[] | null>(null);
  const [fallBack, setFallBack] = useState(false);
  useEffect(() => {
    fetchEngList(url).then((res) => {
      setEngineers(res);
    });
  }, [fallBack]);

  if (!engineers) return null;

  return (
    <div className=" ">
      <h2 className="text-white">Count : ( {engineers?.length} )</h2>
      {engineers && engineers.length > 0 ? (
        engineers.map((eng: userType) => (
          <EngCard
            key={eng?._id}
            eng={eng}
            user={user}
            fallBack={fallBack}
            setFallBack={setFallBack}
          />
        ))
      ) : (
        <div>No Engineers Found</div>
      )}
    </div>
  );
};

export default EngList;
