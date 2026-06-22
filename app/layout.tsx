import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sylvain AI - Photographe & videaste",
  description: "Portfolio creatif de Sylvain AI, photographe et videaste d'aventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
