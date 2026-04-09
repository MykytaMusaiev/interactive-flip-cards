import type { Card } from "../types";

export const initialCards: Card[] = [
    {
        id: "1",
        title: "Fire Dragon",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Komodo_dragon_with_tongue.jpg/800px-Komodo_dragon_with_tongue.jpg",
        description:
            "Ancient beast born from volcanic fury. Its breath melts steel and its scales resist any blade.",
        category: "fire",
        stats: { power: 95, defense: 60, speed: 75, rarity: "legendary" },
        isFavorite: false,
    },
    {
        id: "2",
        title: "Water Serpent",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Aesculapian_snake_(Zamenis_longissimus).jpg/800px-Aesculapian_snake_(Zamenis_longissimus).jpg",
        description:
            "Dweller of the deep ocean trenches. Controls tides and can summon storms at will.",
        category: "water",
        stats: { power: 70, defense: 80, speed: 90, rarity: "epic" },
        isFavorite: false,
    },
    {
        id: "3",
        title: "Earth Titan",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/600px-Earth_Western_Hemisphere_transparent_background.png",
        description:
            "Unwavering force of mountains and earth. Its footsteps cause earthquakes across continents.",
        category: "earth",
        stats: { power: 85, defense: 95, speed: 50, rarity: "rare" },
        isFavorite: false,
    },
    {
        id: "4",
        title: "Air Vortex",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Tornado_in_Seymour_Texas_1979.jpg/600px-Tornado_in_Seymour_Texas_1979.jpg",
        description:
            "Invisible force of nature. Moves faster than sound and strikes without warning.",
        category: "air",
        stats: { power: 65, defense: 45, speed: 99, rarity: "epic" },
        isFavorite: false,
    },
    {
        id: "5",
        title: "Fire Phoenix",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Phoenix_zo_Warschau.jpg/600px-Phoenix_zo_Warschau.jpg",
        description:
            "Reborn from ashes after every defeat. Eternal flame that cannot be extinguished.",
        category: "fire",
        stats: { power: 88, defense: 55, speed: 82, rarity: "legendary" },
        isFavorite: true,
    },
];
