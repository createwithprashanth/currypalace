import type { Metadata } from "next";
import "./globals.css";
import { restaurant } from "@/config/restaurant";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: restaurant.siteTitle,
  description: restaurant.siteDescription,
  keywords: restaurant.siteKeywords,
  openGraph: {
    title: restaurant.ogTitle,
    description: restaurant.ogDescription,
    images: [restaurant.ogImage],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased"><Providers>{children}</Providers></body>
    </html>
  );
}
