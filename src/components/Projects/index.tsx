import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/utils/projects";
import github from "@/assets/github.svg";

export default function Projects() {
    return (
        <section id="projects" className="py-16 md:py-24 bg-terciary">
            <div className="w-full px-5 md:px-28">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold">Projetos</h2>
                    <hr className="w-12 h-1 bg-primary rounded-full" />
                    <p className="max-w-[760px] md:text-lg text-mutedForeground">
                        Aqui estão alguns dos meus projetos recentes. Cada um
                        foi construído pensando em solucionar um problema
                        específico ou para explorar uma nova tecnologia.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                    {projects.map((project, index) => {
                        return (
                            <Card key={index} className="max-w-xl overflow-hidden group">
                                <div className="relative overflow-hidden aspect-video">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-left transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-xl mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-mutedForeground mb-4 text-justify">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm">
                                            <ExternalLink className="h-4 w-4 mr-1" />
                                            <Link
                                                href={project.deploy}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Site
                                            </Link>
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Image
                                                src={github}
                                                alt="github icon"
                                                width={16}
                                                height={16}
                                                className="h-4 w-4 mr-1"
                                            />
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Código
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
                <div className="flex justify-center mt-12">
                    <Button variant="outline">
                        <Link
                            href="https://github.com/nicolasfreitas-dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
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
                    </Button>
                </div>
            </div>
        </section>
    );
}
