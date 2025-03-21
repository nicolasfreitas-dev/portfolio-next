import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative py-20 md:py-36 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold">
                            Olá, eu sou Nicolas Freitas
                        </h1>
                        <h2 className="text-5xl font-bold"></h2>
                        <p className="text-xl text-mutedForeground">
                            Desenvolvedor Fullstack especializado em construir soluções digitais que
                            fazem a diferença.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                            <Button className="bg-primary text-secondary">
                                <Link
                                    href="#projects"
                                    className="flex items-center font-bold"
                                >
                                    Confira meus trabalhos
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            <Button variant="outline">
                                <Download />
                                Download CV
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
