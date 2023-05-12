/* eslint-disable @next/next/no-img-element */
import { Account } from "@/types/api";
import { FC } from "react";
import avatar from "../assets/avatar.png";

interface UserslistProps {
  users: Account[];
  selected: number;
  setSelected: Function;
}

const Userslist: FC<UserslistProps> = ({ users, selected, setSelected }) => {
  return (
    <>
      {users?.map((singleUser, i) => (
        <button
          key={i}
          onClick={() => {
            setSelected(i);
            console.log("clicked", i);
          }}
          className={
            selected === i
              ? "w-full flex cursor-pointer hover:bg-[#dbcece] dark:hover:bg-[#3d3a3a] justify-start gap-x-2 items-center pl-2 bg-[#D4D4D4] dark:bg-[#505050] py-3 rounded-md transition-all"
              : "w-full flex cursor-pointer hover:bg-[#D4D4D4] dark:hover:bg-[#505050] justify-start gap-x-2 items-center pl-2 bg-[#ECECEC] dark:bg-[#252525] py-3 rounded-md transition-all"
          }
        >
          <img
            src={singleUser.avatar as string}
            placeholder="blur"
            onBlur={(e) => {
              e.currentTarget.src = avatar.src;
            }}
            onError={(e) => {
              e.currentTarget.src = avatar.src;
            }}
            alt="Profile"
            width={80}
            height={80}
            className="h-8 w-8 rounded-full"
          />
          <p>
            {singleUser?.profile.firstName} {singleUser?.profile.lastName}
          </p>
        </button>
      ))}
    </>
  );
};

export default Userslist;
