import { useState } from "react"

export const useMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuOpen = (isOpen: boolean) => {
        setIsMenuOpen(isOpen);
    };

    return { isMenuOpen, setIsMenuOpen, handleMenuOpen }
}