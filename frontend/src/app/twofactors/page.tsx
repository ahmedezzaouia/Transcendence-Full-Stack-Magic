"use client";
import { useSearchParams } from "next/navigation"; // Import from next/navigation
import { useEffect, useState } from "react";
import Form2fa from "../../components/form2fa/form2fa";
import useSWR from "swr";
import { fetchUserQrcode, verifyFirstLogin2fa } from "@services/twofaServices";

export default function Twofactors() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("id");
  const [isError, setIsError] = useState(false);

  const submitForm = async (e: any) => {
    e.preventDefault();
    const inputFields = document.querySelectorAll(".input-fields input");
    let token = "";
    inputFields.forEach((input) => {
      token += input.value;
    });

    try {
      const tokenData = await verifyFirstLogin2fa(userId, token);
      console.log(tokenData);
      if (tokenData.isValid === true && tokenData.accessToken) {
        localStorage.setItem("accessToken", tokenData.accessToken);
        window.location.href= `dashboard?&accesstoken=${tokenData.accessToken}`;
      }
      else {
        setIsError(true);
      }
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <div className="form-container">
        <Form2fa submitForm={submitForm} isError={isError} />
      </div>
    </main>
  );
}
