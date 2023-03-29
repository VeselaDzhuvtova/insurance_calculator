import * as request from "./requester";

const baseUrl = 'http://localhost:3030';

export const getAll = () => {
   return fetch(`${baseUrl}/data/cars`)
      .then(res => res.json())
};







export const getOne = async (carId) => {
   const result = await request.get(`${baseUrl}/${carId}`);

   return result;
};

export const create = async (carData) => {
   const result = await request.post(baseUrl, carData);

   console.log(result);

   return result;
};




