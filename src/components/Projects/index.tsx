"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/utils/projects";
import { ExternalLink } from "lucide-react";
import github from "@/assets/github-black.svg";

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-16 md:py-24 bg-highlight text-white"
        >
            <div className="w-full px-5 md:px-28">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold">Projetos</h2>
                    <hr className="w-12 h-1 bg-accent-deep border-none appearance-none p-0 m-0" />
                    <p className="max-w-[760px] md:text-lg text-accent">
                        Aqui estão alguns dos meus projetos recentes. Cada um
                        foi construído pensando em solucionar um problema
                        específico ou para explorar uma nova tecnologia.
                    </p>
                </div>
                <motion.div
                    className="grid gap-6 sm:grid-cols-3"
                    initial="hidden"
                    whileInView="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.5,
                            },
                        },
                    }}
                >
                    {projects.map((project, index) => {
                        return (
                            <motion.div
                                className="flex flex-col justify-between h-full rounded-xl border border-accent-dark text-white shadow-sm overflow-hidden group bg-background"
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.8,
                                            ease: "easeInOut",
                                        },
                                    },
                                }}
                            >
                                <div className="relative overflow-hidden aspect-video">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-left transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col flex-grow p-6">
                                    <h3 className="font-bold text-xl mb-2 text-accent">
                                        {project.title}
                                    </h3>
                                    <p className=" mb-4 text-justify">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2 py-1 bg-accent-deep/10 text-accent text-xs rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2 px-6 pb-6 mt-4 text-accent">
                                    <Link
                                        href={project.deploy}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-sm font-medium bg-accent-deep text-secondary rounded-md hover:bg-accent-light px-3 py-1"
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        Site
                                    </Link>
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-sm font-medium bg-accent-deep text-secondary rounded-md hover:bg-accent-light px-3 py-1"
                                    >
                                        <Image
                                            src={github}
                                            alt="github icon"
                                            width={16}
                                            height={16}
                                            className="h-4 w-4 mr-2"
                                        />
                                        Código
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
                <div className="flex justify-center mt-12 text-accent">
                    <Link
                        href="https://github.com/nicolasfreitas-dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium bg-accent-deep text-secondary px-4 py-2 rounded-md hover:bg-accent-light"
                    >
                        <Image
                            src={github}
                            alt="github icon"
                            width={16}
                            height={16}
                            className="h-4 w-4 mr-2"
                        />
                        Veja mais no meu GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}
