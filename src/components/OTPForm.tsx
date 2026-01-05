// src/components/OTPForm.tsx
import React, { useState, useEffect } from 'react';
import { mobileOtpSend, verifyOtp, updateMobileNo } from '../api/auth';

interface Props {
  empId: string;
  loginConsent: number;
}

const OTPForm: React.FC<Props> = ({ empId, loginConsent }) => {
  const [otp, setOtp] = useState('');
  const [newMobile, setNewMobile] = useState('');
  const [count, setCount] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => setCount((c) => (c > 0 ? c - 1 : 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSendOtp = async () => {
    await mobileOtpSend(empId, newMobile);
  };

  const handleVerify = async () => {
    const res = await verifyOtp(empId, otp);
    if (res.data.status) {
      if (newMobile) {
        await updateMobileNo(empId, newMobile);
      }
      alert('OTP Verified');
    } else {
      alert(res.data.msg);
    }
  };

  return (
    <div className="otp-form">
      {newMobile && (
        <input
          type="text"
          placeholder="New Mobile"
          value={newMobile}
          onChange={(e) => setNewMobile(e.target.value)}
        />
      )}
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleSendOtp}>Send OTP</button>
      <button onClick={handleVerify}>Verify OTP</button>
      <div>Time left: {Math.floor(count / 60)}:{count % 60}</div>
    </div>
  );
};

export default OTPForm;
