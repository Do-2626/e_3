import Image from "next/image";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="w-full py-5   bg-gradient-44 text-white  ">
      <div className="container flex flex-col lg:flex-row sm:justify-evenly">
        <p className="text-2xl my-2">
          Contact with Management Team
          <a href="https://wa.me/+201019204649" target="_blank">
            <Image
              className="inline-block mx-2 animate-bounce"
              src="/WhatsApp.svg.png"
              alt="whatsapp"
              width={40}
              height={40}
            />
          </a>
        </p>
        <p className="text-2xl my-2">
          To Join Recruiters Group
          <a
            href="https://chat.whatsapp.com/JUeaMMjlT419z6DomjggUm"
            target="_blank"
          >
            <Image
              className="inline-block mx-2 animate-bounce"
              src="/WhatsApp.svg.png"
              alt="whatsapp"
              width={40}
              height={40}
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
