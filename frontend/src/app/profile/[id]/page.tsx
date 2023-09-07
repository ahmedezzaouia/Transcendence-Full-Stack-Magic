"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { fetchUser } from "@/services/userServices";
import Form2fa from "../../../components/form2fa/form2fa";

interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
}

export default function Profile() {
  const params = useParams();
  const userId = params.id;
  const { data, error, isLoading } = useSWR(`http://localhost:3001/user/${userId}`, fetchUser);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [qrcode, setQrcode] = useState("");

  const handle2FAToggle = async () => {
    setShowForm(!showForm); 
    
  };

  const handle2FASubmit = async (e: any) => {

  }

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
      {showForm ? (
        <div className="form-container">
          <Form2fa qrcode={qrcode} submitForm={handle2FASubmit} setShowForm={setShowForm} />
        </div>
      ) : null}
      <h1>Profile page</h1>
      <h2>hello : {data.username}</h2>
      <label className="switch">
        <input type="checkbox" checked={is2FAEnabled} onChange={handle2FAToggle} />
        <span className="slider round">Enable 2FA</span>
      </label>
    </main>
  );
}
