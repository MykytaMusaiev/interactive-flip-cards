import { useRef, useEffect } from "react";
import type { UseFlipSoundReturn } from "../types";

const START_AT = 0;
const BASE_VOLUME = 0.3;

export const useFlipSound = (src: string): UseFlipSoundReturn => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(src);
        audioRef.current.volume = BASE_VOLUME;

        return () => {
            audioRef.current = null;
        };
    }, [src]);

    const playFlip = () => {
        if (audioRef.current === null) return;
        audioRef.current.currentTime = START_AT;
        audioRef.current.play().catch(() => {});
    };

    return { playFlip };
};
