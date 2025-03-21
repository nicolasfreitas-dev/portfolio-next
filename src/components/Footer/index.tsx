import Image from "next/image";
import { Button } from "../ui/button";
import linkedin from "@/assets/linkedin.svg"
import github from "@/assets/github.svg"
import Link from "next/link";
import logopreta from "@/assets/logo-preta.png";

export default function Footer() {
    return (
        <footer className="border-t py-8 md:py-12">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div>
                        <Link href="/">
                            <Image
                                src={logopreta}
                                width={50}
                                height={50}
                                alt="logo marca"
                            />
                        </Link>
                    </div>
                    <p className="text-mutedForeground text-sm max-w-[500px]">
                        Desenvolvedor Fullstack especializado em construir
                        soluções digitais que fazem a diferença. Vamos trabalhar
                        juntos para trazer suas ideias a vida.
                    </p>
                    <div className="flex items-center gap-5">
                        <Button variant="ghost" size="icon">
                            <Link
                                href="https://github.com/nicolasfreitas-dev"
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
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Link
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
                        </Button>
                    </div>
                    <div>
                        <span className="text-sm text-mutedForeground">
                            © {new Date().getFullYear()} Nicolas Freitas. Todos
                            os direitos reservados.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
