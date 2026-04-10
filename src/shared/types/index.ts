// ─── Union types ────────────────────────────────────────────────────────────

export type Category = "fire" | "water" | "earth" | "air";

export type Rarity = "common" | "rare" | "epic" | "legendary";

export type Theme = "light" | "dark";

// ─── Core data interfaces ────────────────────────────────────────────────────

export interface CardStats {
    power: number;
    defense: number;
    speed: number;
    rarity: Rarity;
}

export interface Card {
    id: string;
    title: string;
    image: string;
    description: string;
    category: Category;
    stats: CardStats;
    isFavorite: boolean;
}

// ─── Component props ─────────────────────────────────────────────────────────

export interface CardFrontProps {
    card: Card;
    onToggleFavorite: (id: string) => void;
}

export interface CardBackProps {
    card: Card;
    onDelete: (id: string) => void;
}

export interface FlipCardProps {
    card: Card;
    dragIndex: number | null;
    index: number;
    onDelete: (id: string) => void;
    onToggleFavorite: (id: string) => void;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
    onDragOver: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
    onDragEnd: () => void;
}

export interface CardGridProps {
    cards: Card[];
    onDelete: (id: string) => void;
    onToggleFavorite: (id: string) => void;
    onReorder: (cards: Card[]) => void;
}

export interface AddCardFormProps {
    onAddCard: (card: Card) => void;
}

export interface ThemeToggleProps {
    theme: Theme;
    onToggle: () => void;
}

export interface HeaderProps {
    favoritesCount: number;
    totalCount: number;
    theme: Theme;
    onToggleTheme: () => void;
}

// ─── Hook return types ───────────────────────────────────────────────────────

export interface UseDragAndDropReturn {
    dragIndex: number | null;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
    onDragOver: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
    onDragEnd: () => void;
}

export interface UseThemeReturn {
    theme: Theme;
    toggleTheme: () => void;
}

export interface UseFlipSoundReturn {
    playFlip: () => void;
}
