import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/cars';


export const carServiceFactory = (token) => {
   const request = requestFactory(token);

   const getAll = async () => {
      const result = await request.get(baseUrl);
      const cars = Object.values(result);

      return cars;
   };

   const getOne = async (carId) => {
      const result = await request.get(`${baseUrl}/${carId}`);
      console.log(result);
      return result;
   };

   const create = async (carData) => {
      const result = await request.post(baseUrl, carData);

      console.log(result);
      return result;
   };


   return {
      getAll,
      getOne,
      create,
   };
};

export default carServiceFactory;