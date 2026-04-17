import type { FormErrors, FormFields } from "../types";

const STAT_MIN = 0;
const STAT_MAX = 100;

export const validateCardFields = (fields: FormFields): FormErrors => {
    const errors: FormErrors = {};

    if (!fields.title.trim()) errors.title = "Title is required";
    if (!fields.image.trim()) errors.image = "Image URL is required";
    if (!fields.description.trim())
        errors.description = "Description is required";
    if (!fields.category) errors.category = "Select a category";
    if (!fields.rarity) errors.rarity = "Select rarity";

    const power = Number(fields.power);
    const defense = Number(fields.defense);
    const speed = Number(fields.speed);

    if (isNaN(power) || power < STAT_MIN || power > STAT_MAX)
        errors.power = `Power must be ${STAT_MIN}–${STAT_MAX}`;
    if (isNaN(defense) || defense < STAT_MIN || defense > STAT_MAX)
        errors.defense = `Defense must be ${STAT_MIN}–${STAT_MAX}`;
    if (isNaN(speed) || speed < STAT_MIN || speed > STAT_MAX)
        errors.speed = `Speed must be ${STAT_MIN}–${STAT_MAX}`;

    return errors;
};
