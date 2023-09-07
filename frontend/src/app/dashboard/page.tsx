"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchToken } from "../../services/userServices";

export default function Dashboard() {
  const [token, setToken] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  useEffect(() => {
    (async () => {
      // this is comming from the first authencation
      if (userId) {
        const token = await fetchToken(userId);
        if (token) {
          localStorage.setItem("accessToken", token);
          setToken(token);
          window.location.href = `/profile/${userId}`;
        }
      }
    })();
  }, []);

  // this is comming from the first authencation
  if (userId) return <div></div>;
  return (
    <div>
      <h1>Dashboard</h1>
      {token && <p>Your token is: {token}</p>}
    </div>
  );
}
