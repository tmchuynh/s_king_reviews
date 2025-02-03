"use client";
import Head from "next/head";
import "./globals.css";
import { Providers } from "./provider";
import BackToTop from "@/components/BackToTop";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
  title = "Home",
  description = "Tina Huynh",
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Tina Huynh" />
        <meta name="description" content={description} />
        <meta title={title} />
        <title>{title}</title>
      </Head>
      <body>
        <Providers>
          <MainContent>{children}</MainContent>
        </Providers>
      </body>
    </html>
  );
}

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="mx-auto py-10 overflow-hidden">
        <NavBar />
        {children}
        <BackToTop />
      </main>
    </>
  );
};
