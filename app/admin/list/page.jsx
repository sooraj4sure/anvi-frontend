'use client'
import List from '../../../components/admin/pages/List';
import { useAdmin } from '../../../context/AdminContext';

export default function AdminListPage() {
  const { token } = useAdmin();
  return <List token={token} />;
}
