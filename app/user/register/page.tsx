import { FC } from "react";
import RegisterForm from "@/components/RegisterForm";
interface pageProps {}

const Register: FC<pageProps> = ({}) => {
  return (
    <div className=" mt-56 sm:mt-4   ">
      <RegisterForm />
    </div>
  );
};

export default Register;
