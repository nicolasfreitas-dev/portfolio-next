import wisebills from "@/assets/wisebills.png"
import dripstore from "@/assets/drip-store.png"
import portfolioNext from "@/assets/portfolio-next.png"
import fitzone from "@/assets/fitzone.png"

export const projects = [
    {
        image: wisebills,
        title: "Wisebills",
        description:
            "Uma aplicação web, desenvolvida seguindo os princípios de mobile first, com o objetivo de facilitar a organização e o gerenciamento financeiro do usuário.",
        tags: [
            "Next.js",
            "Typescript",
            "Tailwindcss",
            "Zod",
            "React Hook Form",
            "Zustand",
        ],
        deploy: "https://wisebills-coral.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/wisebills.git",
    },
    {
        image: fitzone,
        title: "FitZone",
        description:
            "Landing page para uma academia com um atraente. Apresentando um pouco da história da academia, suas conquistas, modalidades esportivas ofertadas e planos com pacotes mensais e anuais.",
        tags: ["React", "Typescript", "SCSS"],
        deploy: "https://fitzone-page.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/fitzone.git",
    },
    {
        image: portfolioNext,
        title: "Portfolio",
        description:
            "Portfolio profissional com design simples e moderno, desenvolvido utilizando tecnologias atuais no mercado.",
        tags: ["Next.js", "Typescript", "Tailwindcss", "Framer Motion"],
        deploy: "https://nicolasfreitas.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/portfolio-next.git",
    },
    {
        image: dripstore,
        title: "Drip Store",
        description:
            "E-commerce para venda de roupas e produtos esportivos. O foco deste projeto foi desenvolvedor o site na versão desktop, sem incluir responsividade.",
        tags: ["React", "Javascript", "Tailwindcss"],
        deploy: "https://drip-store-frontend.vercel.app/",
        github: "https://github.com/nicolasfreitas-dev/drip-store-frontend.git",
    },
];
