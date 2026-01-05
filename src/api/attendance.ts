// src/api/attendance.ts

import axios from 'axios';
import apiClient from './apiClient';
const API_URL = (import.meta as any).env.VITE_API_URL || '';
if (!API_URL) {
  throw new Error('API URL not defined in .env');
}


export const getCostCenterAttendance = async (params: any) => {
  console.log('Mock getCostCenterAttendance called', params);
  return {
    status: true,
    header: ['ID', 'Name', 'Cost Center', 'Attendance'],
    data: [
      [1, 'John Doe', 'CC001', 'Present'],
      [2, 'Jane Smith', 'CC002', 'Absent'],
    ],
    data_detail: { from: 1, to: 2, count: 2 },
    url: '',
    blob_type: ''
  };

};

export const getAllUserAttendance = async (params: any) => {
  console.log('Mock getAllUserAttendance called', params);
  return {
    status: true,
    header: ['ID', 'Name', 'Date', 'Status'],
    data: [
      [1, 'John Doe', '2025-10-09', 'Present'],
      [2, 'Jane Smith', '2025-10-09', 'Absent'],
    ],
    data_detail: { from: 1, to: 2, count: 2 },
    url: '',
    blob_type: ''
  };
};

export const getUserLogAttendance = async (params: any) => {
  console.log('Mock getUserLogAttendance called', params);
  return {
    status: true,
    header: ['ID', 'Name', 'Log In', 'Log Out'],
    data: [
      [1, 'John Doe', '09:00', '18:00'],
      [2, 'Jane Smith', '09:30', '18:30'],
    ],
    data_detail: { from: 1, to: 2, count: 2 },
    url: '',
    blob_type: ''
  };
};

export const searchEmployee = async (username: string) => {
  if (!username) return { status: false, msg: 'No username provided', data: [] };

  try {


    const res = await apiClient.get(`${API_URL}/search_emp_by_id_all/${username}`);

    if (res.data && res.data.status && res.data.data.length > 0) {
      const emp = res.data.data[0]; // access the first employee
      return {
        status: true,
        data: [
          { id: emp.id, username: emp.username, name: emp.name }
        ]
      };
    } else {
      return { status: false, msg: 'Employee not found', data: [] };
    }

  } catch (err: any) {
    console.error('Error in searchEmployee:', err);
    return { status: false, msg: 'API error', data: [] };
  }
};


