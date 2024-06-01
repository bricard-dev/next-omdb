import { inter } from '@/app/ui/fonts';
import '@/app/ui/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next OMDb',
  description: 'Explore movies through the OMDb API.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
