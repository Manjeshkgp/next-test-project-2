"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";
import { Account } from "@/types/api";
import Pagecontainer from "./Pagecontainer";

const Container = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<Account[]>([]);
  const fetchApi = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://602e7c2c4410730017c50b9d.mockapi.io/users`
      );
      const data = (await res.json()) as Account[];
      setUsers(data);
    } catch (error) {
      setLoading(false);
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return <>{loading ? <Loader /> : <Pagecontainer users={users} />}</>;
};

export default Container;
