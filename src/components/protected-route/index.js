'use client';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';

import { useAuth } from '@/state/auth/auth-context';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    if (!user.uid) {
      redirect('/auth/login');
    }
  }, [user]);

  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
