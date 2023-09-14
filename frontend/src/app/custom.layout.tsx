"use client";
import { AsideBar, NavBar } from "@/components";
import React from "react";

const CustomLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <NavBar />
      <AsideBar />
      <div className=" px-10 sm:ml-64 ">
        <div className="page-container p-4 border-2 rounded-lg">{children}</div>
      </div>
    </>
  );
};

export default CustomLayout;
