import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/potion.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "schnee98 (박주은, Schnee) 블로그",
  description: "주니어 프론트엔드 개발자 Schnee의 블로그입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
