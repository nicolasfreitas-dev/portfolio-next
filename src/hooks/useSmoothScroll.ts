export const useSmoothScroll = (toggleMenu: (isOpen: boolean) => void) => {
    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }

        toggleMenu(false)
    }

    return { handleScroll }
}