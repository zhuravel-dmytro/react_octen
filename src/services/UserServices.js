import {urls} from "../configs/Urls";


const getAll = ()=> {
    return  fetch(urls.users)
        .then(value => value.json())
}

export const userService = {
    getAll
}