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
