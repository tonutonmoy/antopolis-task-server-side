
import catchAsync from "../../utlis/catchAsync/catchAsync";
import { AnimalAndCategoryServices } from "./AnimalAndCategory.Services";


const createAnimal = catchAsync(async (req, res) => {
  const result = await AnimalAndCategoryServices.createAnimalDB(req?.body);

  res.send({
    statusCode: 201,
    success: true,
    message: "Animal created successfully",
    data: result,
  });
});

const getAnimal = catchAsync(async (req, res) => {

    
    const result = await AnimalAndCategoryServices.getAnimalDB(req?.params?.name);
  
    res.send({
      statusCode: 200,
      success: true,
      message: "Animal get successfully",
      data: result,
    });
  });


const createCategory = catchAsync(async (req, res) => {

   
  const result = await AnimalAndCategoryServices.createCategoryDB(req?.body);

  res.send({
    statusCode: 201,
    success: true,
    message: "Category created successfully",
    data: result,
  });
});


const getCategory = catchAsync(async (req, res) => {
  const code = req?.params?.code;
  const result = await AnimalAndCategoryServices.getCategoryDB();

  res.send({
    statusCode: 200,
    success: true,
    message: "Category get successfully",
    data: result,
  });
});



export const AnimalAndCategoryControllers = {
    createAnimal,
    getCategory,
    createCategory,
    getAnimal,
};
