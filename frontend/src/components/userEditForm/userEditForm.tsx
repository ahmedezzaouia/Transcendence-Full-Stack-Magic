"use client";
import React, { useState } from "react";
import "./userEditForm.css";
interface UserEditFormProps {
  showModal: boolean,
  setShowModal: (showModal: boolean) => void,
  defaultImage: string,
  is2FAEnabled: boolean,
  toggle2faSwitch: () => void
}
const UserEditForm = ({ showModal, setShowModal, defaultImage, is2FAEnabled ,toggle2faSwitch}: UserEditFormProps) => {
  const [image, setImage] = useState(defaultImage);
  const handleAvaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {showModal ? (
        <div className="userModal-container">
          <div className="userModal w-80 pt-5 rounded-2xl bg-slate-900">
            <span className="close" onClick={() => setShowModal(false)}>
              X
            </span>
            <div className="flex flex-col gap-2 p-8">
              <img
                alt="profil"
                src={image}
                className="mx-auto mb-7 object-cover rounded-full h-20 w-20   border-2 border-white dark:border-gray-800"
              />
              <input
                className="mb-4 block w-full text-sm borderrounded-lg cursor-pointer  focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                onChange={(e) => handleAvaUpload(e)}
              />

              <input
                className="mb-4 bg-slate-900 w-full rounded-lg border border-gray-300 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800"
                placeholder="Username"
              />
              <label className="flex cursor-pointer items-center justify-between p-1 text-slate-400">
                Enable 2FA
                <div className="relative inline-block">
                  <input
                    className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                    type="checkbox"
                    checked={is2FAEnabled}
                    onChange={toggle2faSwitch}
                  />
                  <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
                </div>
              </label>

              <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">
                Save
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UserEditForm;
