'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { technologies } from "@/utils/skills"

export default function Skills() {
    return (
        <section id="skills" className="py-16 md:py-24 text-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold">Habilidades</h2>
                    <hr className="w-12 h-1 bg-accent-deep border-none appearance-none p-0 m-0" />
                    <p className="max-w-[720px] md:text-lg text-accent">
                        Tecnologias com as quais trabalho
                    </p>
                </div>
                <motion.div
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 md:gap-12"
                    initial="hidden"
                    whileInView="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.3,
                            },
                        },
                    }}
                >
                    {technologies.map((tech, index) => {
                        return (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center group"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                            ease: "easeInOut",
                                        },
                                    },
                                }}
                            >
                                <div className="relative p-6 rounded-full bg-highlight transition-all duration-300 hover:bg-accent-light/10 hover:shadow-lg">
                                    <Image
                                        src={tech.image || ""}
                                        alt={tech.name}
                                        width={48}
                                        height={48}
                                        className="transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <span className="mt-3 text-sm text-accent font-medium">
                                    {tech.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
