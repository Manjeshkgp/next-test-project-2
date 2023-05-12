import { Account } from "@/types/api";
import { FC } from "react";

interface PagecontainerProps {
  users: Account[];
}

const Pagecontainer: FC<PagecontainerProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen justify-items-center transition-all duration-300">
      <div className="w-40 h-40 bg-green-300"></div>
      <div className="w-40 h-40 bg-blue-300"></div>
    </div>
  );
};

export default Pagecontainer;
