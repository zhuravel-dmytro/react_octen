import {urls} from "../configs/urls";
import {axiosServices} from "./axiosServices";

export const userService = {
    getAll:()=>axiosServices.get(urls.cars).then(value => value.data)
}

