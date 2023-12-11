import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

import { Inter } from 'next/font/google';

const font = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
