
import React from "react";
import "./from2fa.css"; 

interface props {
  qrcode: string;
  submitForm: (e: any) => void;
  setShowForm?: (showForm: boolean) => void;
}

export default function Form2fa({ qrcode, submitForm , setShowForm}: props) {
  return (
    <form className="form" onSubmit={(e) => submitForm(e)}>
      <span className="close" onClick={()=> setShowForm && setShowForm(false)}>X</span>
      <div className="info">
        <span className="title">Two-Factor Verification</span>
        <p className="description">
          Enter the two-factor authentication code provided by the authenticator
          app
        </p>
        {qrcode ? <img src={qrcode} alt="QR Code" /> : "Loading QR Code..."}
      </div>
      <div className="input-fields">
        <input type="tel" placeholder="" />
        <input type="tel" placeholder="" />
        <input type="tel" placeholder="" />
        <input type="tel" placeholder="" />
        <input type="tel" placeholder="" />
        <input type="tel" placeholder="" />
      </div>
      <div className="action-btns">
        <button type="submit" className="verify">
          Verify
        </button>
      </div>
    </form>
  );
}
