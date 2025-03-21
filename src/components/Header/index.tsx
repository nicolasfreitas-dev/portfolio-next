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

    return (
        <header className="sticky top-0 z-10 w-full h-16 border-b bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/60 flex items-center justify-between px-10 md:px-20">
            <div className="h-full flex items-center">
                <Link href="/">
                    <Image src={logopreta} width={50} height={50} alt="logo marca" />
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
                <Link href="#home" className="text-sm font-medium">
                    Página inicial
                </Link>
                <Link href="#about" className="text-sm font-medium">
                    Sobre mim
                </Link>
                <Link href="#skills" className="text-sm font-medium">
                    Habilidades
                </Link>
                <Link href="#projects" className="text-sm font-medium">
                    Projetos
                </Link>
            </nav>
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden bg-secondary">
                    <nav className="flex flex-col gap-3 p-4">
                        <Link
                            href="#home"
                            className="py-2 text-sm font-medium"
                            onClick={handleMenuOpen}
                        >
                            Página inicial
                        </Link>
                        <Link
                            href="#about"
                            className="py-2 text-sm font-medium"
                            onClick={handleMenuOpen}
                        >
                            Sobre mim
                        </Link>
                        <Link
                            href="#skills"
                            className="py-2 text-sm font-medium"
                            onClick={handleMenuOpen}
                        >
                            Habilidades
                        </Link>
                        <Link
                            href="#projects"
                            className="py-2 text-sm font-medium"
                            onClick={handleMenuOpen}
                        >
                            Projetos
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};
