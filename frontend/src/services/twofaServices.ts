
  export const fetchUserQrcode = async (url: string): Promise<string> => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch QR code: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.qrcodeUrl
    } catch (error) {
      console.error("Error in fetchUserQrcode:", error);
      throw new Error("Failed to get QR code for user");
    }
  };
  

export const verifyFirstLogin2fa = async (userId: string, token: string): Promise<{ isValid: boolean }> => {
    try {
      const response = await fetch('http://localhost:3001/user/verify2f-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, id: userId })
      });
  
      if (!response.ok) {
        throw new Error(`Failed to verify 2FA for the fisrt Login: ${response.statusText}`);
      }
      const tokenData = await response.json();
      return tokenData;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to verify 2FA in the first login');
    }
  };
  