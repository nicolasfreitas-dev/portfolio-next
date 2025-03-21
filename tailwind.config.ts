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
                primary: "rgba(0, 0, 0)",
                secondary: "rgba(255,255,255)",
                terciary: "rgba(249,249,250)",
                muted: "rgba(179, 179, 179)",
                mutedForeground: "rgba(127, 127, 135)"
            },
        },
    },
} satisfies Config;
