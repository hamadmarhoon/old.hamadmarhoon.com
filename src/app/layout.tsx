import "./globals.css";
import { Ubuntu_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const roboto = Ubuntu_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hamad Marhoon",
  description: "Full Stack Mobile & Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
      <Analytics />
    </html>
  );
}
