// Shared admin config — replaces the `export const backendUrl/currency` lines
// that lived in admin/src/App.jsx (imported by Login/Add/List/Orders pages)
export const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
export const currency = "₹"
