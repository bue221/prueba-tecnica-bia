import Navbar from "@/components/common/navbar";
import { ThemeProvider } from "@/components/common/theme-provider";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";


const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Flag of the world",
  description: "A comprehensive guide to the flags of all countries"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunitoSans.variable} antialiased h-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar />
            <div className="flex flex-1 dark:bg-gray-900">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
