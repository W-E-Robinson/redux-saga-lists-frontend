import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppState } from "./modules/Redux/reducers/rootReducer";
import {
    fetchListRequest,
    //completeItemRequest,
    //deleteItemRequest,
    //addItemRequest,
} from "./modules/Redux/actions/lists/actions";

import "./App.css";

export const App = () => {
    const reduxDispatch = useDispatch();
    const list = useSelector(
        (state: AppState) => state.lists.list,
    );
    
    const [newItem, setNewItem] = useState("");

    useEffect(() => {
        reduxDispatch(fetchListRequest());
    }, [reduxDispatch]);

    const completeItem = (index: number) => {
        console.info("complete");
        console.info(index);
        //deleteItemRequest(index);
    };

    const deleteItem = (index: number) => {
        console.info("delete");
        console.info(index);
        //patchItemRequest(index, value);
    };

    const addItem = () => {
        console.info("add item");
        //postItemRequest(value);
    };
  
    return (
        <>
            <h1>redux-saga</h1>
            {list.map((item, index) => {
                return <div key={index}>
                    <h2>{item.value}</h2>
                    <button onClick={() => completeItem(index)}>complete</button>
                    <button onClick={() => deleteItem(index)}>delete</button>
                </div>
            })}
            <form onSubmit={addItem}>
                <label>
                    Add Item:
                <input
                    type="text"
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

