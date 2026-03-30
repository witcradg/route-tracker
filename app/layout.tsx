import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Route Tracker",
  description: "Internal driving-route workspace",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
