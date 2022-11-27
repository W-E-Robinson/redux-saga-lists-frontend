import axios from "axios";

export const getList(id: string): unknown => {
    try {
        const response = await axios.get(`lists/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
