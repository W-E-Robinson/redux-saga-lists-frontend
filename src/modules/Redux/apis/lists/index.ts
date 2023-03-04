import axios, { AxiosError } from "axios";

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
        const err = error as AxiosError;
        if (err.response) {
            console.error(err.response.data);
            console.error(err.response.status);
            console.error(err.response.headers);
        } else if (err.request) {
            console.error(err.request);
        } else {
            console.error('Error', err.message);
        }
        console.error(err.config);
    }
}

export const patchList = async (id: number) => {
    const url = BASE_URL + LISTS_URL + "/" + id;
    try {
        const response = await axios.patch(url);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        if (err.response) {
            console.error(err.response.data);
            console.error(err.response.status);
            console.error(err.response.headers);
        } else if (err.request) {
            console.error(err.request);
        } else {
            console.error('Error', err.message);
        }
        console.error(err.config);
    }
}

export const postItem = async (value: string) => {
    const url = BASE_URL + LISTS_URL;
    try {
        const response = await axios.post(
            url,
            { value: value },
        );
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        if (err.response) {
            console.error(err.response.data);
            console.error(err.response.status);
            console.error(err.response.headers);
        } else if (err.request) {
            console.error(err.request);
        } else {
            console.error('Error', err.message);
        }
        console.error(err.config);
    }
}

export const deleteItem = async (id: number) => {
    const url = BASE_URL + LISTS_URL + "/" + id;
    try {
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        const err = error as AxiosError;
        if (err.response) {
            console.error(err.response.data);
            console.error(err.response.status);
            console.error(err.response.headers);
        } else if (err.request) {
            console.error(err.request);
        } else {
            console.error('Error', err.message);
        }
        console.error(err.config);
    }
}

