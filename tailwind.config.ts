import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                main: "#222222", // Fundo principal
                secondary: "#000000", // Fundo secundário
                highlight: "#1d1f20", // Fundo de destaque
                accent: "#3df3c2", // Destaque primário
                "accent-light": "#15f5ba", // Destaque para hover suave
                "accent-dark": "#1dcd9f", // Destaque para bordas
                "accent-deep": "#169976", // Destaque para botões
                muted: "rgba(179, 179, 179)",
                mutedForeground: "rgba(127, 127, 135)",
            },
        },
    },
} satisfies Config;