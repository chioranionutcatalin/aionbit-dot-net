import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";
import { LanguageProvider } from "../components/language-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "Aiton | Freelancing and Outsourcing Agency",
  description:
    "We build modern websites, web apps, and scalable digital products through flexible outsourcing partnerships.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} relative bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(1100px_640px_at_86%_8%,rgba(244,114,182,0.2),transparent_58%),radial-gradient(900px_560px_at_16%_82%,rgba(192,132,252,0.18),transparent_62%),radial-gradient(760px_460px_at_52%_38%,rgba(99,102,241,0.2),transparent_68%),linear-gradient(160deg,#020617_6%,#03112d_48%,#0f1738_100%)]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.018)_0px,rgba(255,255,255,0.018)_1px,transparent_1px,transparent_14px)] opacity-55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.4),transparent_45%)]" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <LanguageProvider>
            <Header />
            {children}
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}
