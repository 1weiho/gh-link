import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";

export const metadata = {
  metadataBase: new URL("https://gh-link.vercel.app/"),
  title: "GH Link",
  description: "A Link in Bio website configured with only a JSON file",
  keywords:
    "link in bio, linktree, linktr.ee, link, bio, link bio, linktree, linktr.ee, linktr, linktree alternative, linktr alternative, linktr.ee alternative",
  authors: [{ name: "Ho Yi Wei", url: "https://www.github.com/davidho0403" }],
  openGraph: {
    type: "website",
    url: "https://gh-link.vercel.app",
    title: "GH Link",
    description: "A Link in Bio website configured with only a JSON file",
    images: [
      {
        url: "https://gh-link.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "GH Link",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GH Link",
    description: "A Link in Bio website configured with only a JSON file",
    creator: "@1weiho",
    images: ["https://gh-link.vercel.app/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
