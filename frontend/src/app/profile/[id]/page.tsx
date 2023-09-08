"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetchUser } from "@/services/userServices";
import Form2fa from "../../../components/form2fa/form2fa";
import { enable2fa, disable2fa, verifyEnabled2fa } from "@services/twofaServices";

interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
}

export default function Profile() {
  const params = useParams();
  const userId = params.id;

  const { data, error } = useSWR(`http://localhost:3001/user/${userId}`, fetchUser);

  const [is2FAEnabled, setIs2FAEnabled] = useState<boolean | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [qrcode, setQrcode] = useState("");

  const handle2FAToggle = async () => {
    try {
      if (data.isTwofactorsEnabled === false || is2FAEnabled === false) {
        const qrcodeUrl = await enable2fa();
        setShowForm(true);
        setQrcode(qrcodeUrl);
      } else if (data.isTwofactorsEnabled === true || is2FAEnabled === true) {
        const disbaleData = await disable2fa();
        console.log(disbaleData);
        setIs2FAEnabled(disbaleData.isDisable ? false : true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handle2FASubmit = async (e: any) => {
    e.preventDefault();
    const inputFields = document.querySelectorAll(".input-fields input");
    let token = "";
    inputFields.forEach((input) => {
      token += input.value;
    });
    try {
      const verifyData = await verifyEnabled2fa(token);
      if (verifyData.isValid) {
        setShowForm(false);
        setIs2FAEnabled(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <main>
      {showForm ? (
        <div className="form-container">
          <Form2fa qrcodeUrl={qrcode} submitForm={handle2FASubmit} setShowForm={setShowForm} />
        </div>
      ) : null}
      <h1>Profile page</h1>
      <h2>hello : {data.username}</h2>
      <label className="switch">
        <input
          type="checkbox"
          checked={is2FAEnabled === null ? data.isTwofactorsEnabled : is2FAEnabled}
          onChange={handle2FAToggle}
        />
        <span className="slider round">Enable 2FA</span>
      </label>
    </main>
  );
}
