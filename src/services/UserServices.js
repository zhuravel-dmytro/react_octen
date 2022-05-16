import {urls} from "../configs/Urls";
import {axiosServices} from "./axiosServices";

export const userService = {
    getAll:()=>axiosServices.get(urls.users).then(value => value.data)
}

