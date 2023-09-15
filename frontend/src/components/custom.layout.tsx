"use client";
import { usePathname } from "next/navigation";
import { AsideBar, NavBar } from ".";
import { useEffect } from "react";

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const excludePaths = ["/twofactors", "/"];
  
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken !== null && pathname === "/") {
      window.location.href = "dashboard";
    }
  }, []);

  return excludePaths.includes(pathname) ? (
    <div>{children}</div>
  ) : (
    <>
      <NavBar />
      <AsideBar />
      <div className="px-10 sm:ml-64">
        <div className="page-container p-4 border-2 rounded-lg">{children}</div>
      </div>
    </>
  );
};

export default CustomLayout;
