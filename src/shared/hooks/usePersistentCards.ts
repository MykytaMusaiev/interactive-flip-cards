import { useState } from "react";
import type { Card } from "../types";
import { initialCards } from "../data/cards";

const STORAGE_KEY = "flip-cards-order";

export const usePersistentCards = () => {
    const [cards, setCards] = useState<Card[]>(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) return initialCards;
            const parsed: Card[] = JSON.parse(stored);
            return parsed.length > 0 ? parsed : initialCards;
        } catch {
            return initialCards;
        }
    });

    const updateCards = (updated: Card[]) => {
        setCards(updated);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    };

    return { cards, updateCards };
};
