import { FC } from "react";

interface HeadingProps {
  children: React.ReactNode;
}

const Heading: FC<HeadingProps> = ({ children }) => {
  return (
    <div className="text-xl mb-4 md:text-[24px] md:leading-[29px] md:h-14 h-10 w-full rounded-t-xl bg-[#C5DFFF] dark:bg-[#1e4579] text-center flex justify-center items-center">
      <p>{children}</p>
    </div>
  );
};

export default Heading;
