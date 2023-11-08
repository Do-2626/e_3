import Link from "next/link";
import { FC } from "react";
import NavAuth from "./NavAuth";
import Image from "next/image";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="w-full   rounded-b-xl  top-0   flex justify-end  gap-2 p-3 items-center  shadow-xl z-10">
      <NavAuth />
    </div>
  );
};

export default Navbar;
