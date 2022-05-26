import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

// CRUD
export const carsService = {
    create: (car)=> axiosService.post(urls.cars).then(value => value.data),
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.cars}/${id}`).then(value => value.data),
    updateById: (id) => axiosService.put(`${urls.cars}/${id}`).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`)
}

