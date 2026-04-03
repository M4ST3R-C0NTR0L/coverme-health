import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoverMe Health | Health Insurance That Cares",
  description: "Find the perfect health insurance plan for you and your family. Compare 200+ plans, save up to 40%, and get enrolled in minutes.",
  keywords: "health insurance, medical insurance, family health insurance, individual health insurance, self-employed health insurance",
  openGraph: {
    title: "CoverMe Health | Coverage That Cares. Plans That Fit.",
    description: "Find the perfect health insurance plan for you and your family. Compare 200+ plans and save up to 40%.",
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
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
