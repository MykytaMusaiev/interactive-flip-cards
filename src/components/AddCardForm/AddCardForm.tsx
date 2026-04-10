import React, { useState } from 'react';
import type { AddCardFormProps, Card, Category, FormErrors, FormFields, Rarity } from '../../shared/types';
import './AddCardForm.css';

const INITIAL_FIELDS: FormFields = {
  title: '',
  image: '',
  description: '',
  category: '',
  rarity: '',
  power: '50',
  defense: '50',
  speed: '50',
};

const STAT_MIN = 0;
const STAT_MAX = 100;

const validateFields = (fields: FormFields): FormErrors => {
  const errors: FormErrors = {};

  if (!fields.title.trim()) errors.title = 'Title is required';
  if (!fields.image.trim()) errors.image = 'Image URL is required';
  if (!fields.description.trim()) errors.description = 'Description is required';
  if (!fields.category) errors.category = 'Select a category';
  if (!fields.rarity) errors.rarity = 'Select rarity';

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

const AddCardForm: React.FC<AddCardFormProps> = ({ onAddCard }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fields, setFields] = useState<FormFields>(INITIAL_FIELDS);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateFields(fields);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newCard: Card = {
      id: crypto.randomUUID(),
      title: fields.title.trim(),
      image: fields.image.trim(),
      description: fields.description.trim(),
      category: fields.category as Category,
      isFavorite: false,
      stats: {
        power: Number(fields.power),
        defense: Number(fields.defense),
        speed: Number(fields.speed),
        rarity: fields.rarity as Rarity,
      },
    };

    onAddCard(newCard);
    setFields(INITIAL_FIELDS);
    setErrors({});
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setFields(INITIAL_FIELDS);
    setErrors({});
  };

  return (
    <div className="add-card-form__container">
      {!isOpen ? (
        <button className="add-card-form__toggle" onClick={() => setIsOpen(true)}>
          ➕ Add Card
        </button>
      ) : (
        <div className="add-card-form__panel">
          <div className="add-card-form__panel-header">
            <h2 className="add-card-form__panel-title">Add New Card</h2>
            <button className="add-card-form__close" onClick={handleClose}>
              ✕ Close Form
            </button>
          </div>

          <form className="add-card-form" onSubmit={handleSubmit} noValidate>
            <div className="add-card-form__row">
              <div className="add-card-form__field">
                <label className="add-card-form__label">Title *</label>
                <input
                  className={`add-card-form__input ${errors.title ? 'add-card-form__input--error' : ''}`}
                  name="title"
                  value={fields.title}
                  onChange={handleChange}
                  placeholder="Card title"
                />
                {errors.title && (
                  <span className="add-card-form__error">{errors.title}</span>
                )}
              </div>

              <div className="add-card-form__field">
                <label className="add-card-form__label">Image URL *</label>
                <input
                  className={`add-card-form__input ${errors.image ? 'add-card-form__input--error' : ''}`}
                  name="image"
                  value={fields.image}
                  onChange={handleChange}
                  placeholder="https://example.com/image.jpg"
                />
                {errors.image && (
                  <span className="add-card-form__error">{errors.image}</span>
                )}
              </div>
            </div>

            <div className="add-card-form__row">
              <div className="add-card-form__field">
                <label className="add-card-form__label">Category *</label>
                <select
                  className={`add-card-form__input ${errors.category ? 'add-card-form__input--error' : ''}`}
                  name="category"
                  value={fields.category}
                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  <option value="fire">🔥 Fire</option>
                  <option value="water">💧 Water</option>
                  <option value="earth">🌍 Earth</option>
                  <option value="air">💨 Air</option>
                </select>
                {errors.category && (
                  <span className="add-card-form__error">{errors.category}</span>
                )}
              </div>

              <div className="add-card-form__field">
                <label className="add-card-form__label">Rarity *</label>
                <select
                  className={`add-card-form__input ${errors.rarity ? 'add-card-form__input--error' : ''}`}
                  name="rarity"
                  value={fields.rarity}
                  onChange={handleChange}
                >
                  <option value="">Select rarity</option>
                  <option value="common">Common</option>
                  <option value="rare">Rare</option>
                  <option value="epic">Epic</option>
                  <option value="legendary">Legendary</option>
                </select>
                {errors.rarity && (
                  <span className="add-card-form__error">{errors.rarity}</span>
                )}
              </div>
            </div>

            <div className="add-card-form__field">
              <label className="add-card-form__label">Description *</label>
              <textarea
                className={`add-card-form__input add-card-form__textarea ${errors.description ? 'add-card-form__input--error' : ''}`}
                name="description"
                value={fields.description}
                onChange={handleChange}
                placeholder="Card description"
                rows={3}
              />
              {errors.description && (
                <span className="add-card-form__error">{errors.description}</span>
              )}
            </div>

            <div className="add-card-form__stats">
              {(['power', 'defense', 'speed'] as const).map(stat => (
                <div className="add-card-form__field" key={stat}>
                  <label className="add-card-form__label">
                    {stat.charAt(0).toUpperCase() + stat.slice(1)}: {fields[stat]}
                  </label>
                  <input
                    className="add-card-form__range"
                    type="range"
                    name={stat}
                    min={STAT_MIN}
                    max={STAT_MAX}
                    value={fields[stat]}
                    onChange={handleChange}
                  />
                  {errors[stat] && (
                    <span className="add-card-form__error">{errors[stat]}</span>
                  )}
                </div>
              ))}
            </div>

            <button className="add-card-form__submit" type="submit">
              Add Card
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddCardForm;