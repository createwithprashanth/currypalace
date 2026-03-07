import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curry Palace Restaurant | The Palace of Iconic Taste · Abu Dhabi",
  description:
    "Curry Palace Restaurant – Al Zahiyah, Tourist Club Area, Abu Dhabi. Open 24 hours. Authentic Kerala cuisine, Arabic Shawarma, Charcoal Chicken, Fresh Juices & Free Home Delivery. Call 02 448 4041.",
  keywords: [
    "Curry Palace Restaurant",
    "Kerala restaurant Abu Dhabi",
    "Biryani Abu Dhabi",
    "Indian restaurant UAE",
    "مطعم كاري بالس",
    "Charcoal chicken Abu Dhabi",
    "Shawarma Abu Dhabi",
    "Open 24 hours restaurant Abu Dhabi",
    "Free delivery restaurant Abu Dhabi",
  ],
  openGraph: {
    title: "Curry Palace Restaurant | The Palace of Iconic Taste",
    description: "Authentic Kerala & Arabic cuisine in Al Zahiyah, Abu Dhabi. Open 24/7. Free Home Delivery.",
    images: ["/images/curry_palace00001.jpg"],
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
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
