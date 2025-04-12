'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useMenu } from "@/hooks/useMenu";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Header() {
    const { isMenuOpen, handleMenuOpen } = useMenu()
    const { handleScroll } = useSmoothScroll({ toggleMenu: handleMenuOpen })

    return (
        <header className="sticky top-0 z-10 w-full h-16 border-b bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/60 flex items-center justify-between px-10 md:px-20">
            <div className="h-full flex items-center">
                <Link href="/" onClick={(e) => handleScroll(e, "home")}>
                    <p className="font-bold">Nicolas<span className="text-mutedForeground">.dev</span></p>
                </Link>
            </div>
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                type="button"
                onClick={() => handleMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Menu className="w-6 h-6" />
                )}
            </Button>
            <nav className="hidden md:flex items-center gap-5">
                <a
                    href="#home"
                    className="text-sm font-medium p-2"
                    onClick={(e) => handleScroll(e, "home")}
                >
                    Página inicial
                </a>
                <a
                    href="#about"
                    className="text-sm font-medium p-2"
                    onClick={(e) => handleScroll(e, "about")}
                >
                    Sobre mim
                </a>
                <a
                    href="#skills"
                    className="text-sm font-medium p-2"
                    onClick={(e) => handleScroll(e, "skills")}
                >
                    Habilidades
                </a>
                <a
                    href="#projects"
                    className="text-sm font-medium p-2"
                    onClick={(e) => handleScroll(e, "projects")}
                >
                    Projetos
                </a>
                <a
                    href="#contact"
                    className="text-sm font-medium p-2"
                    onClick={(e) => handleScroll(e, "contact")}
                >
                    Contato
                </a>
            </nav>
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden bg-secondary">
                    <nav className="flex flex-col gap-3 p-4">
                        <a
                            href="#home"
                            className="p-2 text-sm font-medium"
                            onClick={(e) => handleScroll(e, "home")}
                        >
                            Página inicial
                        </a>
                        <a
                            href="#about"
                            className="p-2 text-sm font-medium"
                            onClick={(e) => handleScroll(e, "about")}
                        >
                            Sobre mim
                        </a>
                        <a
                            href="#skills"
                            className="p-2 text-sm font-medium"
                            onClick={(e) => handleScroll(e, "skills")}
                        >
                            Habilidades
                        </a>
                        <a
                            href="#projects"
                            className="p-2 text-sm font-medium"
                            onClick={(e) => handleScroll(e, "projects")}
                        >
                            Projetos
                        </a>
                        <a
                            href="#contact"
                            className="p-2 text-sm font-medium"
                            onClick={(e) => handleScroll(e, "contact")}
                        >
                            Contato
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};
