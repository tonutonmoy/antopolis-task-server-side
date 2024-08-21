import { TAnimal, TCategory } from "./AnimalAndCategory.Interface";
import { AnimalModel, CategoryModel } from "./AnimalAndCategory.Model";

//  create aniaml data
const createAnimalDB = async (payload: TAnimal) => {
  const result = await AnimalModel.create(payload);


  return result;
};

//  create category data
const createCategoryDB = async (payload: TCategory) => {
  const result = await CategoryModel.create(payload);

 
  return result;
};

//  get aniaml data
const getAnimalDB = async (name:string) => {

let result;
    if(name==='all'){
       return  result = await AnimalModel.find();
    }
    
   return result = await AnimalModel.find({category:name})
 
  

};

//  get category data
const getCategoryDB = async () => {
  const result = await CategoryModel.find();
 
  return result;
};


export const AnimalAndCategoryServices = {
    createAnimalDB,
    createCategoryDB,

    getAnimalDB,
    getCategoryDB,
};
