import Header from "@/components/Header";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aula - learning NextJS",
  description: "Learning NextJS with Sujeito Programador!",
  openGraph: {
    title: "Aprendendo NextJS com Sujeito Programador no Youtube!",
    description: "Learning NextJS with Sujeito Programador!",
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    googleBot: {
      index: true,
      follow: true,
      noarchive: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={"antialiased"}>
        <Header />

        {children}
      </body>
    </html>
  );
}
