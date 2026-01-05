// src/components/ConsentModal.tsx
import React from 'react';
import { verifyConsent } from '../api/auth';

interface Props {
  empId: string;
}

const ConsentModal: React.FC<Props> = ({ empId }) => {
  const handleConsent = async (checked: boolean) => {
    const res = await verifyConsent({ user_id: empId, consent: checked });
    if (res.data.status) {
      alert('Consent accepted!');
    } else {
      alert(res.data.msg);
    }
  };

  return (
    <div className="consent-modal">
      <h3>Consent Form</h3>
      <label>
        <input type="checkbox" onChange={(e) => handleConsent(e.target.checked)} /> I agree
      </label>
    </div>
  );
};

export default ConsentModal;
