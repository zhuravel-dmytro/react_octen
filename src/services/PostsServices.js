import axios from "axios";
import {axiosServices} from "./axiosServices";
import {urls} from "../configs/Urls";

export const postsServices ={
    getByUserId:(id) => axiosServices.get(`${urls.posts}?userId=${id}`).then(value => value.data)
}