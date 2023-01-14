import axios from "axios";
import {
    BASE_URL,
    LISTS_URL,
} from "../../../../../constants/index";
import { getList } from "../index"


jest.mock("axios", () => {
    return {
        get: jest.fn(),
    };
});

describe("api testing", () => {
    test("getList", () => {
        getList();
        expect(axios.get).toHaveBeenCalledWith(BASE_URL + LISTS_URL);
    });
});
