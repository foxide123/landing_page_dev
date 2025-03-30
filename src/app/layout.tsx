import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavWrapper from "@/components/LayoutComponents/NavWrapper";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "DashcruiseDev - Web Design & Development Agency",
  description:
    "We build fast, beautiful websites for startups, businesses and individuals looking for a custom design and SEO",
  keywords: ["web agency", "frontend development", "custom website"],
  authors: [{ name: "DashcruiseDev", url: "https://dashcruisedev.com" }],
  creator: "DashcruiseDev",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "DashcruiseDev - Web Design & Development",
    description:
      "Modern websites crafted with performance and user experience in mind",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.io" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans&display=swap"
          as="style"
        />
      </head>
      <body className={` antialiased`}>
        <NavWrapper>{children}</NavWrapper>

        {/* Moving analytics script at the bottom */}
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
