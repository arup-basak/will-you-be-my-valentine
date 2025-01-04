"use client";
import React, { useState, useEffect } from "react";
import DataTable, { Column } from "@/src/components/DataTable";
import { getAllNames } from "@/src/utils/action";
import { IUser } from "@/src/utils/types";

const columns: Column<IUser>[] = [
  { key: "name", header: "Name" },
  { key: "count", header: "Count" },
  { key: "ip", header: "IP Address" },
  { key: "time", header: "Time" },
];

const PasswordProtectedPage = ({ data }: { data: IUser[] }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const correctPassword = process.env.NEXT_PUBLIC_PASSWORD;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            placeholder="Enter password"
          />
          <button 
            type="submit"
            className="block w-full bg-blue-500 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <main>
      <DataTable<IUser>
        data={data}
        columns={columns}
        className="col-span-2 max-h-[50vh] md:max-h-[80vh]"
      />
    </main>
  );
};

const Page = () => {
  const [allNames, setAllNames] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const names = await getAllNames();
      setAllNames(names);
    };
    fetchData();
  }, []);

  return <PasswordProtectedPage data={allNames} />;
};

export default Page;