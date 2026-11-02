import { Suspense } from 'react';
import Verify from '../../components/pages/Verify';

// useSearchParams() requires a Suspense boundary in the App Router
export default function VerifyPage() {
  return (
    <Suspense>
      <Verify />
    </Suspense>
  );
}
