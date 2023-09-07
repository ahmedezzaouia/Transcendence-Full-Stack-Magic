"use client"
import { useSearchParams } from 'next/navigation';  // Import from next/navigation
import { useEffect, useState } from 'react';
import Form2fa from "../../components/form2fa/form2fa";


export default function Twofactors() {
  const [qrcode, setQrcode] = useState();

  const searchParams = useSearchParams();
  const userId = searchParams.get('id');

//   useEffect(() => {
//     axios.get(`http://localhost:3001/auth/qrcode?id=${userId}`)
//       .then(response => {
//         console.log("qrcode get: ", response.data.qrCode)
//         setQrcode(response.data.qrCode);
//       })
//       .catch(error => {
//         console.error('Error fetching QR code:', error);
//       });
//   }, [qrcode]);


  const submitForm = (e:any) => {
    // Get values from input fields
    e.preventDefault();
    // const inputFields = document.querySelectorAll('.input-fields input');
    // let token = '';
    // inputFields.forEach((input) => {
    //   token += input.value;
    // });
  
    // console.log('Token:', token);
    // // Send token to the backend
    // axios.post('http://localhost:3001/auth/verify', { token, userId })
    //   .then(response => {
    //     console.log('Verification successful:', response.data);
    //     const isTokenValid = response.data.isValid;
    //     console.log('isTokenValid:', isTokenValid);
    //     if (isTokenValid === true) {
    //       window.location.href = '/'
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Verification failed:', error);
    //   });
  };
  
  return (
    <main>
         <div className="form-container">
          <Form2fa qrcode={""} submitForm={submitForm}  />
        </div>
    </main>
  );
}

