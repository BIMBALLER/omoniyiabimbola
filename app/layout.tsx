import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omoniyi Abimbola Abdulmuizz | Fullstack Business Strategist",
  description: "B.Sc Business & Entrepreneurship Graduate & Fullstack Developer specializing in Next.js and Node.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#030303] text-white antialiased selection:bg-cyan-500/30`}>
        {children}
      </body>
    </html>
  );
}