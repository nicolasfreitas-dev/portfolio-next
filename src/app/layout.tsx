import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio | Nicolas Freitas - Desenvolvedor Fullstack",
  description: "Desenvolvedor Fullstack com experiência em React, Javascript, Typescript, Next.js, Node.js e Java. Especializado em construir soluções digitais que fazem a diferença. Atuo no desenvolvimento e manutenção de aplicações web completas, na criação de sites, interfaces e APIs.",
  icons: {
    icon: "/favicon.ico"
  },
  keywords: ["Portfólio", "React", "NextJS", "Typescript", "Javascript", "Desenvolvedor Fullstack", "GIT", "NodeJS", "HTML", "CSS", "Tailwindcss", "Java", "MySQL", "PostgreSQL", "Prisma", "Express", "Axios", "Jest", "Cypress", "Testes automatizados", "Testes unitários"]
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
