import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function Contact() {
    return (
        <section id="contact" className="py-16 md:24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                        Contate-me
                    </h2>
                    <div className="w-12 h-1 bg-primary rounded-full"></div>
                    <p className="max-w-[700px] text-muted-foreground md:text-lg">
                        Tem um projeto em mente ou gostaria de discutir uma potencial
                        oportunidade? Sinta-se livre para me contatar.
                    </p>
                </div>
                <div className="max-w-[720px] flex flex-col gap-6 items-center justify-center mx-auto">
                    <Card className="w-full">
                        <CardContent className="p-6 flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold">Email</h3>
                                <p className="text-muted-foreground">
                                    nicolasfpdev@gmail.com
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="w-full">
                        <CardContent className="p-6 flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold">Telefone</h3>
                                <p className="text-muted-foreground">
                                    +55 (85) 98551-9571
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="w-full">
                        <CardContent className="p-6 flex items-center gap-4">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold">Localização</h3>
                                <p className="text-muted-foreground">
                                    Fortaleza, Ceará, Brasil
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
