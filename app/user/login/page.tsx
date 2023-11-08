import Login from "@/components/LoginForm";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className=" -mt-36 sm:mt-2 ">
      <Login />
    </div>
  );
};

export default page;
