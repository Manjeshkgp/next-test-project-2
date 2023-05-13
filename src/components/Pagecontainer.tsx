"use client";

import { Account } from "@/types/api";
import { FC, useState } from "react";
import Users from "./Users";

interface PagecontainerProps {
  users: Account[];
}

const Pagecontainer: FC<PagecontainerProps> = ({ users }) => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div className="max-w-[1024px] lg:mx-[calc((100vw-1024px)/2)] flex flex-col-reverse gap-6 justify-start items-center md:items-start md:grid md:grid-cols-2 min-h-screen p-[2vh] md:pt-[3rem] lg:pt-[3rem] lg:p-[2vw] justify-items-center">
      <Users
        selected={selected}
        setSelected={setSelected}
        list={true}
        users={users}
      />
      <Users
        selected={selected}
        setSelected={setSelected}
        list={false}
        users={users}
      />
    </div>
  );
};

export default Pagecontainer;
