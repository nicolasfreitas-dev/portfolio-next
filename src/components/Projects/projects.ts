import wisebills from "@/assets/wisebills.jpeg";
import dripstore from "@/assets/drip-store.png";

export const projects = [
    {
        image: wisebills,
        title: "Wisebills",
        description:
            "Uma aplicação web, desenvolvida seguindo os princípios de mobile first, com o objetivo de facilitar a organização e o gerenciamento financeiro do usuário.",
        tags: ["Next.js", "Typescript", "Tailwindcss", "Zod", "React Hook Form", "Zustand"],
        deploy: "https://wisebills-coral.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/wisebills.git",
    },
    {
        image: dripstore,
        title: "Drip Store",
        description: "E-commerce para venda de roupas e produtos esportivos.",
        tags: ["React", "Tailwindcss", "Javascript"],
        deploy: "https://drip-store-frontend.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/drip-store-frontend.git",
    },
];
