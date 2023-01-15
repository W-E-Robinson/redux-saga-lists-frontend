import axios from "axios";

import {
    BASE_URL,
    LISTS_URL,
} from "../../../../../constants/index";
import {
    getList,
    deleteItem,
    patchList,
    postItem,
} from "../index"


jest.mock("axios", () => {
    return {
        get: jest.fn(),
        delete: jest.fn(),
        patch: jest.fn(),
        post: jest.fn(),
    };
});

describe("api testing", () => {
    test("#1 getList", () => {
        getList();
        expect(axios.get).toHaveBeenCalledWith(BASE_URL + LISTS_URL);
    });
    test("#2 deleteItem", () => {
        deleteItem(1);
        expect(axios.delete).toHaveBeenCalledWith(BASE_URL + LISTS_URL + "/1");
    });
    test("#3 patchList", () => {
        patchList(1);
        expect(axios.patch).toHaveBeenCalledWith(BASE_URL + LISTS_URL + "/1");
    });
    test("#4 postItem", () => {
        postItem("value");
        expect(axios.post).toHaveBeenCalledWith(BASE_URL + LISTS_URL, { value: "value" });
    });
});
