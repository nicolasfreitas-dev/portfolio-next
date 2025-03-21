import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicolas Freitas",
  description: "Portfolio pessoal para demonstrar meus projetos e habilidades como Desenvolvedor Fullstack.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-br">
          <link rel="icon" href="/favicon.ico" />
          <body>{children}</body>
      </html>
  );
}
