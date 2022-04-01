import {urls} from "../configs/Urls";
import {axiosServices} from "./axiosServices";


const getAll = ()=> {
    return  fetch(urls.users)
        .then(value => value.json())
}

export const userService = {
    getAll:()=>axiosServices.get(urls.users).then(value => value.data)
}