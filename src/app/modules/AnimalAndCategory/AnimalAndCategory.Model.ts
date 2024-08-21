
import { Schema, model } from 'mongoose';
import { TAnimal, TCategory } from './AnimalAndCategory.Interface';

// Define the schema for Animal
const animalSchema = new Schema<TAnimal>({
  name: { type: String, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true },
});

// Create the Animal model
export const AnimalModel = model<TAnimal>('Animal', animalSchema);

// Define the schema for Category
const categorySchema = new Schema<TCategory>({
  name: { type: String, required: true },
});

// Create the Category model
export const CategoryModel = model<TCategory>('Category', categorySchema);
