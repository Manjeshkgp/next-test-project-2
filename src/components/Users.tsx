/* eslint-disable @next/next/no-img-element */

import { FC } from "react";
import Heading from "./Heading";
import { Account } from "@/types/api";
import Userslist from "./Userslist";
import Userdetails from "./Userdetails";

interface UsersProps {
  list: boolean;
  users: Account[];
  selected: number;
  setSelected: Function;
}

const Users: FC<UsersProps> = ({ list, users, selected, setSelected }) => {
  return (
    <div
      className={
        list
          ? "w-[90%] h-max min-h-[10rem] max-w-[28rem] flex flex-col items-center justify-start gap-y-2"
          : "w-[90%] h-max min-h-[10rem] max-w-[22rem] flex flex-col items-center justify-start gap-y-4"
      }
    >
      <Heading>{list === true ? "USERS LIST" : "USER DETAILS"}</Heading>
      {list ? (
        <Userslist
          selected={selected}
          setSelected={setSelected}
          users={users}
        />
      ) : null}
      {!list ? <Userdetails user={users[selected]} /> : null}
    </div>
  );
};

export default Users;
