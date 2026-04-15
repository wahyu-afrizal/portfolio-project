import type { Metadata } from "next";
import "./globals.css";

import { defaultDescription, defaultTitle, siteName } from "@/lib/metadata";
import { getBaseUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: defaultTitle,
  description: defaultDescription,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName,
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
