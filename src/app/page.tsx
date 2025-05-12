// app/page.tsx
import { Suspense } from 'react';
import HomeClientPage from './home-list-countries';

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <HomeClientPage />
    </Suspense>
  );
}