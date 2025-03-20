'use client'

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const {isMenuOpen, setIsMenuOpen} = useState(false)

    return (
        <header className="w-full h-28 flex items-center justify-between px-10 border-b-2">
            <div className="h-full flex items-center">
                <Link href="/" className="font-bold">Nicolas Freitas</Link>
            </div>
            <nav className="flex items-center gap-10">
                <Link href="/" className="font-bold">
                    Página inicial
                </Link>
                <Link href="#" className="font-bold">
                    Sobre mim
                </Link>
                <Link href="#" className="font-bold">
                    Tecnologias
                </Link>
                <Link href="#" className="font-bold">
                    Projetos
                </Link>
                <Link href="#" className="font-bold">
                    Contato
                </Link>
                <div>
                    THEME
                </div>
            </nav>
        </header>
    )
};
