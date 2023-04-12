import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030';
const url = `${baseUrl}/data/cars`;

export const carServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(url);
        const cars = Object.values(result);

        return cars;
    };

    const getOne = async (carId) => {
        const result = await request.get(`${url}/${carId}`);

        return result;
    };

    const create = async (carData) => {
        const result = await request.post(url, carData);
        
        return result;
    };

    const deleteCar = (carId) => request.delete(`${baseUrl}/${carId}`);

    const edit = (carId, data) => request.put(`${baseUrl}/${carId}, data`);
    return {
        getAll,
        getOne,
        create,
        delete: deleteCar,
        edit,
    };
}



// import * as request from "./requester";

// const baseUrl = 'http://localhost:3030/data/cars';

// export const getAll = () => request.get(baseUrl);

// export const getOne = (carId) => request.get(`${baseUrl}/${carId}`);

// export const create = (carData) => request.post(baseUrl, carData);

// export const edit = (carId, carData) => request.put(`${baseUrl}/${carId}`, carData);

// export const remove = (carId) => request.del(`${baseUrl}/${carId}`);




