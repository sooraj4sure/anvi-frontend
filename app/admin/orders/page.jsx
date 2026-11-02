'use client'
import Orders from '../../../components/admin/pages/Orders';
import { useAdmin } from '../../../context/AdminContext';

export default function AdminOrdersPage() {
  const { token } = useAdmin();
  return <Orders token={token} />;
}
