"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetchUser } from "../../../services/userServices";

interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
}

export default function Profile() {
  const params = useParams();
  const userId = params.id;
  const { data, error, isLoading } = useSWR(
    `http://localhost:3001/user/${userId}`,
    fetchUser
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <h1>Profile page</h1>
      <h2>hello : {data.username}</h2>
    </div>
  );
}
