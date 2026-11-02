'use client'
import { createContext, useContext } from 'react';

// Carries the admin token from app/admin/layout.jsx down to the admin
// pages — equivalent to the original admin App.jsx passing
// token={token} to the <Add/> <List/> <Orders/> route elements.
export const AdminContext = createContext({ token: '' });

export const useAdmin = () => useContext(AdminContext);

export default AdminContext;
