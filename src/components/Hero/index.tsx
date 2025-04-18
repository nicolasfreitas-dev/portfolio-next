"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative py-20 md:py-36 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold">
                            Olá, eu sou Nicolas Freitas
                        </h1>
                        <h2 className="text-5xl font-bold"></h2>
                        <p className="text-xl text-primary">
                            Desenvolvedor Fullstack especializado em construir
                            soluções digitais que fazem a diferença.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                            <Link
                                href="#projects"
                                className="flex items-center font-bold text-sm bg-primary text-secondary px-4 py-2 rounded-md"
                                onClick={(e) => handleScroll(e, "projects")}
                            >
                                Confira meus trabalhos
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                            <a
                                href="/CV_Nicolas_Freitas.pdf"
                                download="CV_Nicolas_Freitas.pdf"
                                className="flex items-center gap-2 border border-input px-4 py-2 rounded-md"
                            >
                                <Download />
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
