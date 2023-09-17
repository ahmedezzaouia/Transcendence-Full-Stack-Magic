"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Form2fa from "../../../components/form2fa/form2fa";
import { fetchUser } from "@/services/userServices";
import { use2FAFormAuth } from "@/hooks";
import { use2FASwitch } from "@/hooks";
import useSWR from "swr";
import { Achievements, GameHistory, Loading, ProfileCover, UserEditForm } from "@/components";

export default function Profile() {
  const params = useParams();
  const userId = params.id as string;

  const { data: user, error } = useSWR(`http://localhost:3001/user/${userId}`, fetchUser);


  if (error) return <div style={{ color: "red" }}>User not found or failed to load user data</div>;
  if (!user) return <Loading />;
  return (
    <>
      <ProfileCover user={user} />
      <GameHistory />
      <Achievements />
    </>
  );
}
