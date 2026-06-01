import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summer Assignment Tracker - DSA & OOPS | Vaibhav Singh",
  description: "Track LeetCode progress, OOPS programming assignments, complexity analyses, and git consistency throughout the summer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem("theme") || "dark";
                if (theme === "light") {
                  document.documentElement.classList.remove("dark");
                  document.documentElement.style.colorScheme = "light";
                  document.querySelector('meta[name="color-scheme"]').content = "light";
                } else {
                  document.documentElement.classList.add("dark");
                  document.documentElement.style.colorScheme = "dark";
                  document.querySelector('meta[name="color-scheme"]').content = "dark";
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
