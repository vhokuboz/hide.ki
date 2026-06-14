import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getAllPosts } from "@/lib/posts";
import SearchDialog from "@/components/SearchDialog";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hide.ki",
  description: "tracking my life through code, hoops, and anime",
  metadataBase: new URL("https://hide.ki"),
  icons: { icon: "/favicon.ico" },
  other: {
    "theme-color": "#0a0a0f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getAllPosts();

  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-dvh flex flex-col scroll-smooth">
        <SearchDialog posts={posts} />
        {children}
      </body>
    </html>
  );
}
