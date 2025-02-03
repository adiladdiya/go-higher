import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";

const mulish = Mulish({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

 
export const metadata: Metadata = {
  title: "Go Higher",
  description: "Complete you next challenge!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
    <html lang="en">
      <body
        className={`${mulish.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </StoreProvider>
  );
}
