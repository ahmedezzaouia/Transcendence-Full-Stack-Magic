"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { UserEditForm } from "@/components";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  // const [token, setToken] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");
  const accessToken = searchParams.get("accesstoken");
  const isfirstLogin = searchParams.get("firstlogin");
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
    }
    if (userId && isfirstLogin === "true") {
      window.location.href = `/profile/${userId}`;

    }
  }, []);

  if (userId && isfirstLogin === "true") {
    return <div>Redirecting...</div>;
  }
  return (
    <div>
      <h1>Dashboard page</h1>
      <UserEditForm  showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}



