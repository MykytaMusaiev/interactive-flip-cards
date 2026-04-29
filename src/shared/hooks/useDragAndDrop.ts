import { useState } from "react";
import type { Card, UseDragAndDropReturn } from "../types";

export const useDragAndDrop = (
    cards: Card[],
    onReorder: (cards: Card[]) => void,
): UseDragAndDropReturn => {
    const [dragIndex, setDragIndex] = useState<number | null>(null);

    const onDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        setDragIndex(index);
        e.dataTransfer.effectAllowed = "move";
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        e.preventDefault();

        if (dragIndex === null || dragIndex === index) return;

        const updated = [...cards];
        const [dragged] = updated.splice(dragIndex, 1);
        updated.splice(index, 0, dragged);

        onReorder(updated);
        setDragIndex(index);
    };

    const onDragEnd = () => {
        setDragIndex(null);
    };

    return { dragIndex, onDragStart, onDragOver, onDragEnd };
};
