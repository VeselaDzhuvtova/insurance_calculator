import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/cars'

export const getAll = async () => {
   const result = await request.get(baseUrl);
    const cars = Object.values(result);
    
   return cars;
}

export const getOne = async (carId) => {
   const result = await request.get(`${baseUrl}/${carId}`);
   console.log(result);
   return result;
};

export const create = async (carData) => {
   const result = await request.post(baseUrl, carData);

   console.log(result);
   return result;
}