"use client";

import React, { useEffect, useRef, useState } from "react";
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

  const [is2FAEnabled, setIs2FAEnabled] = useState<boolean | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [qrcode, setQrcode] = useState("");

  const handle2FAToggle = async () => {
    try {
      // enable the 2fa
      if (data.isTwofactorsEnabled === false) {
        // getting the qrcode for the user to scan
        const response = await fetch("http://localhost:3001/user/enable2fa", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await response.json();
        console.log(data);
        if (data.qrcodeUrl === "") throw new Error("Failed to enable 2FA becuase qrcode is empty");
        setShowForm(true);
        setQrcode(data.qrcodeUrl);
      } else if (data.isTwofactorsEnabled === true || is2FAEnabled === true){
        // disable the the 2fa
        const response = await fetch("http://localhost:3001/user/disable2fa", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const disbaleData = await response.json();
        console.log(disbaleData);
        setIs2FAEnabled(disbaleData.isDisable ? false: true)
      }
    } catch (error) {
      throw error
    }
  };

  const handle2FASubmit = async (e: any) => {
    e.preventDefault();
    const inputFields = document.querySelectorAll('.input-fields input');
    let token = '';
    inputFields.forEach((input) => {
      token += input.value;
    });
    
    console.log("token2fa = ",token);
    try {
      const response = await fetch("http://localhost:3001/user/verify2fa", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({token}),
      });
      const data = await response.json();
      console.log(data);
      if (data.isValid) {
        setShowForm(false);
        setIs2FAEnabled(true);
      }
    } catch (error) {
      console.log("Failed to verify 2FA");
      throw new Error("Failed to verify 2FA");
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
        <input type="checkbox" checked={is2FAEnabled === null ? data.isTwofactorsEnabled : is2FAEnabled} onChange={handle2FAToggle} />
        <span className="slider round">Enable 2FA</span>
      </label>
    </main>
  );
}
