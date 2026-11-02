'use client'
import '../admin-globals.css';
import { useState, useEffect } from 'react';
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import Login from '../../components/admin/Login';
import { ToastContainer } from 'react-toastify';
import { AdminContext } from '../../context/AdminContext';

export default function AdminLayout({ children }) {
  // localStorage reads are deferred to mount so Next.js prerender doesn't break
  const [token, setToken] = useState('');
  useEffect(() => {
    setToken(localStorage.getItem('token') ? localStorage.getItem('token') : '');
  }, []);

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full ">
            <Sidebar />

            <div className="w-[70%] mx-auto ml-[max(5vw , 25px)] text-gray-600 text-base ">
              <AdminContext.Provider value={{ token }}>
                {children}
              </AdminContext.Provider>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
