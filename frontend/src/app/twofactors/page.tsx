"use client";
import { useSearchParams } from "next/navigation"; // Import from next/navigation
import { useEffect, useState } from "react";
import Form2fa from "../../components/form2fa/form2fa";
import useSWR from "swr";
import {fetchUserQrcode} from '@services/


export default function Twofactors() {
  // const [qrcode, setQrcode] = useState();

  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  // const fetchUserQrcode = async (url:string) => {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //     return data.qrcodeUrl;
  //   } catch (error) {
  //     throw new Error("Failed to get qrcode for user");
  //   }
  // };

  const { data:qrcodeUrl, error } = useSWR(`http://localhost:3001/user/qr-code?id=${userId}`,fetchUserQrcode)

  const submitForm = async (e: any) => {
    // Get values from input fields
    e.preventDefault();
    const inputFields = document.querySelectorAll('.input-fields input');
    let token = '';
    inputFields.forEach((input) => {
      token += input.value;
    });

    // Send token to the backend
    // const response = await fetch('http://localhost:3001/user/verify2f-login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ token, id : userId })
    // });
    // const tokenData = await response.json();
    console.log(tokenData);
    if (tokenData.isValid === true) {
          window.location.href = '/dashboard';
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
