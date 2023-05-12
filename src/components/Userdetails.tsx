/* eslint-disable @next/next/no-img-element */
import { Account } from "@/types/api";
import { FC } from "react";
import avatar from "../assets/avatar.png";

interface UserdetailsProps {
  user: Account;
}

const Userdetails: FC<UserdetailsProps> = ({ user }) => {
  return (
    <div className="flex flex-col gap-4 w-[90%] min-w-[18rem] items-center justify-start">
      <img
        src={user.avatar as string}
        placeholder="blur"
        // blurDataURL={avatar.src}
        onBlur={(e) => {
          e.currentTarget.src = avatar.src;
        }}
        onError={(e) => {
          e.currentTarget.src = avatar.src;
        }}
        alt="Profile"
        width={80}
        height={80}
        className="h-28 w-28 rounded-full"
      />
      <p className="text-lg mb-10 -mt-2">@{user.profile.username}</p>
      <textarea
        className="focus:outline-none bg-[#dbdbdb] dark:bg-[#505050] w-72 -mt-10 text-ellipsis line-clamp-4 resize-none rounded-lg p-2 text-sm border-2 border-[#6C6C6C]"
        value={user.Bio}
        disabled
        rows={4}
      ></textarea>
      <div className="flex -mt-2 flex-col gap-0 justify-start items-start">
        <p className="text-[10px]">Full Name</p>
        <input
          className="p-1 text-[12px] leading-[14.63px] rounded-lg bg-[#dbdbdb] dark:bg-[#505050] w-72 border-[#6C6C6C] border-2"
          type="text"
          value={user.profile.firstName + " " + user.profile.lastName}
          disabled
        />
      </div>
      <div className="flex -mt-2 flex-col gap-0 justify-start items-start">
        <p className="text-[10px]">Job Title</p>
        <input
          className="p-1 text-[12px] leading-[14.63px] rounded-lg bg-[#dbdbdb] dark:bg-[#505050] w-72 border-[#6C6C6C] border-2"
          type="text"
          value={user.jobTitle}
          disabled
        />
      </div>
      <div className="flex -mt-2 flex-col gap-0 justify-start items-start">
        <p className="text-[10px]">Email</p>
        <input
          className="p-1 text-[12px] leading-[14.63px] rounded-lg bg-[#dbdbdb] dark:bg-[#505050] w-72 border-[#6C6C6C] border-2"
          type="text"
          value={user.profile.email}
          disabled
        />
      </div>
    </div>
  );
};

export default Userdetails;
