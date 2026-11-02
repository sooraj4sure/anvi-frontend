'use client'
import Add from '../../../components/admin/pages/Add';
import { useAdmin } from '../../../context/AdminContext';

export default function AdminAddPage() {
  const { token } = useAdmin();
  return <Add token={token} />;
}
