import React, { useEffect } from "react";
import {UserEditForm} from "@/components";
const Settings = () => {
    // const { formStats, verifyTokenSubmission } = use2FAFormAuth({
    //     onVerifyUserSuccess: () => setIs2FAEnabled(true),
    //   });
    
    //   let { is2FAEnabled, setIs2FAEnabled, toggle2faSwitch } = use2FASwitch({
    //     onEnable: (qrcodeUrl) => {
    //       formStats.setShowForm(true);
    //       formStats.setQrcode(qrcodeUrl);
    //     },
    //   });
    
    //   useEffect(() => {
    //     if (user) {
    //       setIs2FAEnabled(user.isTwofactorsEnabled);
    //     }
    //   }, [user]);
  return (
    <main>
      <UserEditForm
        // setShowModal={setShowModal}
        // defaultImage={user.avatarUrl}
        // is2FAEnabled={is2FAEnabled}
        // toggle2faSwitch={toggle2faSwitch}
      />
    
    {/* <div className="form-container">
      <Form2fa
        qrcodeUrl={formStats.qrcode}
        submitForm={verifyTokenSubmission}
        setShowForm={formStats.setShowForm}
        isError={formStats.isFromError}
        setIsError={formStats.setIsFromError}
        /> 
    </div> */}
    
    </main>
  );
};

export default Settings;
