// src/components/MobileUpdateForm.tsx
import React, { useState } from 'react';
import api from '../api/api';

interface Props {
  onUpdated?: () => void;
}

export default function MobileUpdateForm({ onUpdated }: Props) {
  const [newMobile, setNewMobile] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMobile.length !== 10) return alert('Enter 10 digit mobile');
    setLoading(true);
    try {
      const res = await api.post('/update-mobile', { mobile: newMobile });
      if (res.data?.success) {
        alert('Mobile updated');
        onUpdated?.();
      } else {
        alert(res.data?.message || 'Update failed');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="form-group">
        <label>Enter new mobile number</label>
        <input type="tel" className="form-control" value={newMobile} onChange={e => setNewMobile(e.target.value.replace(/\D/g, '').slice(0,10))} />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update Mobile'}
        </button>
      </div>
    </form>
  );
}
