import React from 'react';
import { Inter } from 'next/font/google';

import '../../public/antd.min.css';
import './globals.css';
import { AuthProvider } from '@/state/auth/auth-context';
import { ThemeProvider } from '@/state/theme/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Adkit Admin Panel',
  description: 'Nextjs Admin Template',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
