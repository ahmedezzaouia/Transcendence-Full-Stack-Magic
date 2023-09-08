"use client";
import { useSearchParams } from "next/navigation"; // Import from next/navigation
import { useEffect, useState } from "react";
import Form2fa from "../../components/form2fa/form2fa";
import useSWR from "swr";
import {fetchUserQrcode, verifyFirstLogin2fa} from '@services/twofaServices'


export default function Twofactors() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  const { data:qrcodeUrl, error } = useSWR(`http://localhost:3001/user/qr-code?id=${userId}`,fetchUserQrcode)

  const submitForm = async (e: any) => {
    e.preventDefault();
    const inputFields = document.querySelectorAll('.input-fields input');
    let token = '';
    inputFields.forEach((input) => {
      token += input.value;
    });

    try {
      const tokenData = await verifyFirstLogin2fa(userId, token);
      console.log(tokenData);
      if (tokenData.isValid === true) {
            window.location.href = '/dashboard';
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (error) return <div>Failed to get the QR code</div>;
  if (!qrcodeUrl) return <div>Loading...</div>;

  return (
    <main>
      <div className="form-container">
        <Form2fa qrcodeUrl={qrcodeUrl} submitForm={submitForm} />
      </div>
    </main>
  );
}
