import { Account } from "@/types/api";
import { FC } from "react";
import avatar from "../assets/avatar.png";
import Image from "next/image";

interface UserslistProps {
  users: Account[];
  selected: number;
  setSelected: Function;
}

const Userslist: FC<UserslistProps> = ({ users, selected, setSelected }) => {
  return (
    <>
      {users.slice(0, 11)?.map((singleUser, i) => (
        <button
          key={i}
          onClick={() => {
            setSelected(i);
          }}
          className={
            selected === i
              ? "w-full flex cursor-pointer hover:bg-[#dbcece] dark:hover:bg-[#3d3a3a] justify-start gap-x-2 items-center pl-2 bg-[#D4D4D4] dark:bg-[#505050] py-3 rounded-md transition-all"
              : "w-full flex cursor-pointer hover:bg-[#D4D4D4] dark:hover:bg-[#505050] justify-start gap-x-2 items-center pl-2 bg-[#ECECEC] dark:bg-[#252525] py-3 rounded-md transition-all"
          }
        >
          <Image
            src={singleUser.avatar as string}
            placeholder="blur"
            blurDataURL={avatar.src}
            onBlur={(e) => {
              e.currentTarget.src = avatar.src;
            }}
            onError={(e) => {
              e.currentTarget.src = avatar.src;
              e.currentTarget.srcset = avatar.src;
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
      <button
        className="font-bold text-3xl underline"
        onClick={(e) => {
          e.currentTarget.nextElementSibling?.classList.toggle("hidden");
          e.currentTarget.nextElementSibling?.classList.toggle("flex");
          e.currentTarget.classList.add("hidden");
        }}
      >
        See Full List
      </button>
      <div className="w-full flex-col gap-y-2 hidden">
        {users.slice(11)?.map((singleUser, i) => (
          <button
            key={i + 11}
            onClick={() => {
              setSelected(i + 11);
            }}
            className={
              selected === i + 11
                ? "w-full flex cursor-pointer hover:bg-[#dbcece] dark:hover:bg-[#3d3a3a] justify-start gap-x-2 items-center pl-2 bg-[#D4D4D4] dark:bg-[#505050] py-3 rounded-md transition-all"
                : "w-full flex cursor-pointer hover:bg-[#D4D4D4] dark:hover:bg-[#505050] justify-start gap-x-2 items-center pl-2 bg-[#ECECEC] dark:bg-[#252525] py-3 rounded-md transition-all"
            }
          >
            <Image
              src={singleUser.avatar as string}
              placeholder="blur"
              blurDataURL={avatar.src}
              onBlur={(e) => {
                e.currentTarget.src = avatar.src;
              }}
              onError={(e) => {
                e.currentTarget.src = avatar.src;
                e.currentTarget.srcset = avatar.src;
              }}
              alt="Profile"
              width={80}
              height={80}
              className="h-8 w-8 rounded-full"
              priority
            />
            <p>
              {singleUser?.profile.firstName} {singleUser?.profile.lastName}
            </p>
          </button>
        ))}
      </div>
    </>
  );
};

export default Userslist;
