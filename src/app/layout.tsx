import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T.P.V.SAI DINESH - Full Stack Developer",
  description: "Passionate full stack developer creating beautiful and functional web experiences with modern technologies.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "T.P.V.SAI DINESH" }],
  openGraph: {
    title: "T.P.V.SAI DINESH - Full Stack Developer",
    description: "Passionate full stack developer creating beautiful and functional web experiences.",
    type: "website",
    url: "https://johndoe.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "T.P.V.SAI DINESH - Full Stack Developer",
    description: "Passionate full stack developer creating beautiful and functional web experiences.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
