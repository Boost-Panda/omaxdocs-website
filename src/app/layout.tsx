'use client';

import Script from 'next/script';
import localFont from 'next/font/local';
import './globals.css';
import { ChatWidget } from '@/components/website/Chat';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Associated Oral & Maxillofacial Surgeons</title>
        <meta name="description" content="Excellence in Oral & Maxillofacial Surgery" />
        <Script id="google-analytics-src" async src="https://www.googletagmanager.com/gtag/js?id=G-KNKRSQ0L48"></Script>
        <Script id="google-analytics-script">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KNKRSQ0L48');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
