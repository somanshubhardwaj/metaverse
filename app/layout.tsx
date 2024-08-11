import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "METAVERSE",
  description: "A metaverse website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
