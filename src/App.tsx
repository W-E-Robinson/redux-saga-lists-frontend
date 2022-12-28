import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppState } from "./modules/Redux/reducers/rootReducer";
import { fetchListRequest } from "./modules/Redux/actions/lists/actions";

import "./App.css";

export const App = () => {
    const reduxDispatch = useDispatch();
    const list = useSelector(
        (state: AppState) => state.lists.list,
    );

    useEffect(() => {
        reduxDispatch(fetchListRequest({ id: 1 }))
    }, [reduxDispatch]);

    return (
        <>
            <h1>redux-saga</h1>
            {list.map((item) => {
                return <h2>{item.value}</h2>
            })}
        </>
    );
}

