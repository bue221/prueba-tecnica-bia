import Navbar from "@/components/common/navbar";
import { ThemeProvider } from "@/components/common/theme-provider";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Flag's of the world",
  description: "A comprehensive guide to the flags of all countries",
  openGraph: {
    title: "Flag's of the world",
    description: "A comprehensive guide to the flags of all countries",
    url: "https://flags-of-the-world.vercel.app",
    siteName: "Flag's of the world",
    images: [
      {
        url: "/desktop-design-detail-light.jpg",
        width: 1920,
        height: 1080,
        alt: "Desktop design detail light",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flag's of the world",
    description: "A comprehensive guide to the flags of all countries",
    images: [
      "https://flags-of-the-world.vercel.app/og-image.png",
      "/desktop-design-detail-light.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunitoSans.variable} antialiased h-full bg-[#FAFAFA] dark:bg-[#212D37]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1">
              {children}
            </div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
