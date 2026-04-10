import { useState, useEffect } from "react";
import type { Theme, UseThemeReturn } from "../types";

const STORAGE_KEY = "flip-cards-theme";

export const useTheme = (): UseThemeReturn => {
    const [theme, setTheme] = useState<Theme>(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
};
