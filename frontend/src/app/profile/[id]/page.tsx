"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Form2fa from "../../../components/form2fa/form2fa";
import { fetchUser } from "@/services/userServices";
import { use2FAFormAuth } from "@/hooks";
import { use2FASwitch } from "@/hooks";
import useSWR from "swr";
import { Achievements, GameHistory, ProfileCover } from "@/components";

export default function Profile() {
  const params = useParams();
  const userId = params.id as string;

  const { data: user, error } = useSWR(`http://localhost:3001/user/${userId}`, fetchUser);

  const { formStats, verifyTokenSubmission } = use2FAFormAuth({
    onVerifyUserSuccess: () => setIs2FAEnabled(true),
  });

  let { is2FAEnabled, setIs2FAEnabled, toggle2faSwitch } = use2FASwitch({
    onEnable: (qrcodeUrl) => {
      formStats.setShowForm(true);
      formStats.setQrcode(qrcodeUrl);
    },
  });

  useEffect(() => {
    if (user) {
      setIs2FAEnabled(user.isTwofactorsEnabled);
    }
  }, [user]);

  if (error) return <div>User not found or failed to load user data</div>;
  if (!user) return <div>Loading user data...</div>;
  return (
    <>
      {formStats.showForm ? (
        <div className="form-container">
          <Form2fa
            qrcodeUrl={formStats.qrcode}
            submitForm={verifyTokenSubmission}
            setShowForm={formStats.setShowForm}
            isError={formStats.isFromError}
            setIsError={formStats.setIsFromError}
          />
        </div>
      ) : null}
      {/* <h1>Profile page</h1>
      <h2>hello : {user.username}</h2>
      <label className="switch">
        <input
          type="checkbox"
          checked={is2FAEnabled}
          onChange={toggle2faSwitch}
        />
        <span className="slider round">Enable 2FA</span>
      </label> */}

      <ProfileCover />
      <GameHistory />
      <Achievements />
    </>
  );
}
