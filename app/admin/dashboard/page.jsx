// The original admin Login redirects to /admin/dashboard after login,
// a route that didn't exist there either (its <Routes> rendered nothing
// for it). Kept as an empty page so the behavior matches the original.
export default function AdminDashboardPage() {
  return null;
}
