import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layouts/Header/Header";

export const metadata: Metadata = {
  title: "Nuestras Oficinas",
  description: "Lista de nuestras oficinas disponibles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
