type SmoothScrollProps = {
    toggleMenu?: (isOpen: boolean) => void
}

export const useSmoothScroll = ({ toggleMenu }: SmoothScrollProps = {}) => {
    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }

        if (toggleMenu) {
            toggleMenu(false)
        }
    }

    return { handleScroll }
}