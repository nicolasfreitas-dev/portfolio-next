"use client";

import Image from "next/image";
import linkedin from "@/assets/linkedin.svg";
import github from "@/assets/github.svg";
import Link from "next/link";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Footer() {
    const { handleScroll } = useSmoothScroll();

    return (
        <footer className="text-white border-t border-t-accent-dark py-8 md:py-12 bg-highlight">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div>
                        <Link href="/" onClick={(e) => handleScroll(e, "home")}>
                            <p className="text-xl font-bold text-white">
                                Nicolas
                                <span className="text-accent-light">.dev</span>
                            </p>
                        </Link>
                    </div>
                    <p className="text-sm max-w-[500px]">
                        Desenvolvedor Fullstack especializado em construir
                        soluções digitais que fazem a diferença. Vamos trabalhar
                        juntos para trazer suas ideias a vida.
                    </p>
                    <div className="flex items-center gap-5">
                        <Link
                            href="https://github.com/nicolasfreitas-dev"
                            className="hover:transform hover:scale-110 transition-all ease-in duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <Image
                                src={github}
                                alt="github icon"
                                width={20}
                                height={20}
                            />
                        </Link>
                        <Link
                            className="hover:transform hover:scale-110 transition-all ease-in duration-300"
                            href="https://www.linkedin.com/in/nicolasfreitas-dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={linkedin}
                                alt="linkedin icon"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </div>
                    <div>
                        <span className="text-sm">
                            © {new Date().getFullYear()} Nicolas Freitas. Todos
                            os direitos reservados.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
