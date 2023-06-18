import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

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
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rjc5tfw.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
