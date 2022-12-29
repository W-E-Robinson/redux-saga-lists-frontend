import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppState } from "./modules/Redux/reducers/rootReducer";
import {
    fetchListRequest,
    //deleteItemRequest,
} from "./modules/Redux/actions/lists/actions";

import "./App.css";

export const App = () => {
    const reduxDispatch = useDispatch();
    const list = useSelector(
        (state: AppState) => state.lists.list,
    );

    useEffect(() => {
        reduxDispatch(fetchListRequest());
    }, [reduxDispatch]);

    const completeAction = (index) => {
        console.info("complete");
        //deleteItemRequest(index);
    };

    const deleteAction = (index) => {
        console.info("delete");
        //patchItemRequest(index, value);
    };

    return (
        <>
            <h1>redux-saga</h1>
            {list.map((item, index) => {
                return <div key={index}>
                    <h2>{item.value}</h2>
                    <button onClick={() => completeAction(index)}>complete</button>
                    <button onClick={() => deleteAction(index)}>delete</button>
                </div>
            })}
        </>
    );
}

