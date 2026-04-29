import type { Card } from "../types";

export const initialCards: Card[] = [
    {
        id: "1",
        title: "Fire Dragon",
        image: "https://images.photowall.com/products/74803/phoenix-dragon.jpg?h=699&q=85",
        description:
            "Ancient beast born from volcanic fury. Its breath melts steel and its scales resist any blade.",
        category: "fire",
        stats: { power: 95, defense: 60, speed: 75, rarity: "legendary" },
        isFavorite: false,
    },
    {
        id: "2",
        title: "Water Serpent",
        image: "https://t3.ftcdn.net/jpg/05/63/40/66/360_F_563406619_QYdRTMVcuEoUnDZG6Qvw7tuhz4bTuxj1.jpg",
        description:
            "Dweller of the deep ocean trenches. Controls tides and can summon storms at will.",
        category: "water",
        stats: { power: 70, defense: 80, speed: 90, rarity: "epic" },
        isFavorite: false,
    },
    {
        id: "3",
        title: "Earth Titan",
        image: "https://img.freepik.com/free-photo/cartoon-dragon-character_23-2151129024.jpg?semt=ais_rp_progressive&w=740&q=80",
        description:
            "Unwavering force of mountains and earth. Its footsteps cause earthquakes across continents.",
        category: "earth",
        stats: { power: 85, defense: 95, speed: 50, rarity: "rare" },
        isFavorite: false,
    },
    {
        id: "4",
        title: "Air Vortex",
        image: "https://lirp.cdn-website.com/64c8bf99/dms3rep/multi/opt/bigstock-Dragon-5056881-640w.jpg",
        description:
            "Invisible force of nature. Moves faster than sound and strikes without warning.",
        category: "air",
        stats: { power: 65, defense: 45, speed: 99, rarity: "epic" },
        isFavorite: false,
    },
    {
        id: "5",
        title: "Fire Phoenix",
        image: "https://images.stockcake.com/public/6/b/1/6b13e791-ad0e-473a-a30c-1fefe00e462e_large/fiery-phoenix-rising-stockcake.jpg",
        description:
            "Reborn from ashes after every defeat. Eternal flame that cannot be extinguished.",
        category: "fire",
        stats: { power: 88, defense: 55, speed: 82, rarity: "legendary" },
        isFavorite: true,
    },
];
