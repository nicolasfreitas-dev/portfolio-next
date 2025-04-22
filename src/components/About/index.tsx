'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile.jpeg"

export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-highlight text-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold">Sobre mim</h2>
                    <hr className="w-12 h-1 bg-accent-deep border-none appearance-none p-0 m-0" />
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 ld:gap-12 items-center px-4 md:px-6">
                <div className="flex justify-center">
                    <motion.div
                        className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-accent-dark"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                    >
                        <Image
                            src={profilePhoto}
                            width={350}
                            height={350}
                            alt="profile photo"
                            loading="lazy"
                        />
                    </motion.div>
                </div>
                <motion.div
                    className="md:w-4/5 h-full space-y-4 text-justify"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    <h3 className="text-2xl font-bold text-accent">
                        Quem sou eu
                    </h3>
                    <p>
                        Olá! Me chamo Nicolas Freitas, Desenvolvedor Fullstack e
                        atualmente estou cursando Análise e Desenvolvimento de
                        Sistemas, possuo sólidos conhecimentos em HTML, CSS,
                        Javascript, Typescript, React, Next.js, Node.js, GIT
                        para versionamento de código. Com uma formação anterior
                        na área científica possuo habilidades analíticas e
                        comunicativas que me permitem buscar soluções eficientes
                        para resolução de problemas e trabalhar bem em equipe.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
