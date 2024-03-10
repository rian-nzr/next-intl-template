import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { useLocale } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "update status",
  description: "Generated by create next app",
  icons: "/updateStatus.png",
};
export const contentType = "/updateStatus.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useLocale();
  return (
    <html lang={locale}>
      <body
        className={`${inter.className} flex flex-col justify-between min-h-screen overflow-x-hidden`}
      >
        <div className="">{children}</div>
      </body>
    </html>
  );
}