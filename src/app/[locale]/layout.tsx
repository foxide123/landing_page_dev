import type { Metadata } from "next";
import "@/app/globals.css";
import Script from "next/script";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavWrapper from "@/components/layout/NavWrapper";
import Footer from "@/components/layout/Footer";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { CountryProvider } from "@/context/CountryContext";


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
    siteName: "DashcruiseDev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DashcruiseDev Preview Image",
      },
    ],
    type: "website",
  },
  other: {
    "og:image": "https://dashcruisedev.com/og-image.png",
  },
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'de' }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const lg_screen_width = "lg:w-[75vw]";
  const default_screen_width = "w-[85vw]";

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://dashcruisedev.com/og-image.png"
        />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className={` antialiased`}>
        <CountryProvider>
          <NextIntlClientProvider>
            <NavWrapper
              lg_screen_width={lg_screen_width}
              default_screen_width={default_screen_width}
            >
              {children}
            </NavWrapper>
          </NextIntlClientProvider>
        </CountryProvider>
        <Footer
          lg_screen_width={lg_screen_width}
          default_screen_width={default_screen_width}
        />
        {/* Moving analytics script at the bottom */}
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
