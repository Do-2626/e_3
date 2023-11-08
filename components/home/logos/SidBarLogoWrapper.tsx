import { FC } from "react";
import Logo from "./Logo";
import NavAuth from "@/components/Navbar/NavAuth";
interface SidBarLogoWrapperProps {}

const SidBarLogoWrapper: FC<SidBarLogoWrapperProps> = ({}) => {
  return (
    // <div className="p-2 w-[400px] h-[100vh]  bg-gradient-to-r from-[#0076CB]  from-85% via-100%   to-[#00004A]  ">
    <div
      className="max-md:mt-28 p-2 w-[350px] h-[120vh] bg-gradient-44 rounded-3xl
      flex flex-col justify-evenly items-center"
    >
      <div className="  w-full  relative ">
        <NavAuth />
      </div>
      <Logo />
    </div>
  );
};

export default SidBarLogoWrapper;
