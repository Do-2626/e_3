import { FC } from "react";
import { text } from "stream/consumers";

interface TextWrapperProps {
  title: string;
  value: string;
  className?: string;
  parentClassName?: string;
}

const TextWrapper: FC<TextWrapperProps> = ({
  title,
  value,
  className,
  parentClassName,
}) => {
  return (
    <div
      className={` space-x-2 ${parentClassName}  grid grid-cols-3 md:grid-cols-2 items-baseline justify-center `}
    >
      <span className={`col-span-1   ${className} `}>{title}:</span>
      <span className={`col-span-2 md:col-span-1 ${className} `}>
        {value || "No Info"}
      </span>
    </div>
  );
};

export default TextWrapper;
