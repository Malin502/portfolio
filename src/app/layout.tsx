import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

/*英語用フォント*/
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/*日本語用フォント*/ 
const nonsansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Takuto Maekawa's Portfolio",
  description: "A portfolio website showcasing the projects and skills of Takuto Maekawa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${nonsansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
