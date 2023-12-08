'use client';
import ProtectedRoute from '@/components/protected-route';
import MainLayout from '@/components/layouts/main-layout';

export default function Layout({ children }) {
  return (
    <ProtectedRoute>
      <MainLayout>{children}</MainLayout>
    </ProtectedRoute>
  );
}
