'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import linkedin from "@/assets/linkedin.svg"
import github from "@/assets/github.svg"

export default function Contact() {
    return (
        <section id="contact" className="py-16 md:24 text-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                        Contate-me
                    </h2>
                    <hr className="w-12 h-1 bg-accent-deep border-none appearance-none p-0 m-0" />
                    <div className="w-12 h-1 bg-primary rounded-full"></div>
                    <p className="max-w-[700px] text-accent md:text-lg">
                        Tem um projeto em mente ou gostaria de discutir uma
                        potencial oportunidade? Sinta-se livre para me contatar.
                    </p>
                </div>
                <motion.div 
                    className="max-w-[720px] flex flex-col gap-6 items-center justify-center mx-auto"
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
                    <Card className="w-full hover:bg-accent-light/10">
                        <CardContent className="p-6 flex flex-wrap items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Email</h3>
                                    <p className="text-muted-foreground">
                                        nicolasfpdev@gmail.com
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <a
                        className="w-full"
                        href="https://api.whatsapp.com/send?phone=85985519571"
                        target="_blank"
                    >
                        <Card className="w-full hover:bg-accent-light/10">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Telefone</h3>
                                    <p className="text-muted-foreground">
                                        (85) 98551-9571
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </a>
                    <a
                        className="w-full"
                        href="https://www.linkedin.com/in/nicolasfreitas-dev/"
                        target="_blank"
                    >
                        <Card className="w-full hover:bg-accent-light/10">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Image
                                        src={linkedin}
                                        className="h-6 w-6 text-white"
                                        alt="linkedin icon"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold">Linkedin</h3>
                                    <p className="text-muted-foreground overflow-hidden text-ellipsis break-all">
                                        https://www.linkedin.com/in/nicolasfreitas-dev/
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </a>
                    <a
                        className="w-full"
                        href="https://github.com/nicolasfreitas-dev"
                        target="_blank"
                    >
                        <Card className="w-full hover:bg-accent-light/10">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Image
                                        src={github}
                                        className="h-6 w-6 text-white"
                                        alt="github icon"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold">Github</h3>
                                    <p className="text-muted-foreground">
                                        https://github.com/nicolasfreitas-dev
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
