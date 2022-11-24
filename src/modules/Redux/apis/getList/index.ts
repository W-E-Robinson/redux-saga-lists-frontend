import axios from "axios";

export const getList(id: string): unknown => {
    try {
        const response = await axios.get(`lists/${id}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
