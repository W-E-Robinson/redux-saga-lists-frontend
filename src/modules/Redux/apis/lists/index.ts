import axios from "axios";

import {
    BASE_URL,
    LISTS_URL,
} from "../../../../constants/index";

export const getList = async () => {
    const url = BASE_URL + LISTS_URL;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const patchList = async (id: number) => {
    const url = BASE_URL + LISTS_URL + "/" + id;
    try {
        const response = await axios.patch(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const postItem = async (value: string) => {
    const url = BASE_URL + LISTS_URL;
    try {
        const response = await axios.post(
            url,
            { value: value }, 
        );
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteItem = async (id: number) => {
    const url = BASE_URL + LISTS_URL + "/" + id;
    try {
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

