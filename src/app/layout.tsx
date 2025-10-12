// src/app/layout.tsx
import '../styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'Eclipse Media',
  description: 'Turning Moments into Memories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
