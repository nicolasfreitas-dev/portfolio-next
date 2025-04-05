'use client'

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logopreta from "@/assets/logo-preta.png"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(!isMenuOpen)
    };

    return (
        <header className="sticky top-0 z-10 w-full h-16 border-b bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/60 flex items-center justify-between px-10 md:px-20">
            <div className="h-full flex items-center">
                <Link href="/">
                    <p className="font-bold">Nicolas<span className="text-mutedForeground">.dev</span></p>
                </Link>
            </div>
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={handleMenuOpen}
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
                    className="text-sm font-medium"
                    onClick={(e) => handleScroll(e, "home")}
                >
                    Página inicial
                </a>
                <a
                    href="#about"
                    className="text-sm font-medium"
                    onClick={(e) => handleScroll(e, "about")}
                >
                    Sobre mim
                </a>
                <a
                    href="#skills"
                    className="text-sm font-medium"
                    onClick={(e) => handleScroll(e, "skills")}
                >
                    Habilidades
                </a>
                <a
                    href="#projects"
                    className="text-sm font-medium"
                    onClick={(e) => handleScroll(e, "projects")}
                >
                    Projetos
                </a>
                <a
                    href="#contact"
                    className="text-sm font-medium"
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
                            className="py-2 text-sm font-medium"
                            onClick={(e) => handleScroll(e, "home")}
                        >
                            Página inicial
                        </a>
                        <a
                            href="#about"
                            className="py-2 text-sm font-medium"
                            onClick={(e) => handleScroll(e, "about")}
                        >
                            Sobre mim
                        </a>
                        <a
                            href="#skills"
                            className="py-2 text-sm font-medium"
                            onClick={(e) => handleScroll(e, "skills")}
                        >
                            Habilidades
                        </a>
                        <a
                            href="#projects"
                            className="py-2 text-sm font-medium"
                            onClick={(e) => handleScroll(e, "projects")}
                        >
                            Projetos
                        </a>
                        <a
                            href="#contact"
                            className="py-2 text-sm font-medium"
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
