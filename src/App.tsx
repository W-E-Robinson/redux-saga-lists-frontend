import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppState } from "./modules/Redux/reducers/rootReducer";
import {
    fetchListRequest,
    toggleCompletionRequest,
    //deleteItemRequest,
    addItemRequest,
} from "./modules/Redux/actions/lists/actions";

import "./App.css";

export const App = () => {
    const reduxDispatch = useDispatch();
    const list = useSelector(
        (state: AppState) => state.lists.list,
    );
    
    const [newItem, setNewItem] = useState<string>("");

    useEffect(() => {
        reduxDispatch(fetchListRequest());
    }, [reduxDispatch]);

    const completeItem = (index: number) => {
        const itemId: number = list[index].id;
        reduxDispatch(toggleCompletionRequest(itemId));
    };

    const deleteItem = (index: number) => {
        console.info("delete");
        console.info(index);
        //patchItemRequest(index, value);
    };

    const addItem = (event) => {
        event.preventDefault();
        reduxDispatch(addItemRequest(newItem));
        setNewItem("");
    };
     
    return (
        <>
            <h1>redux-saga</h1>
            {list.map((item, index) => {
                return <div key={index}>
                    <h2>{item.value.payload} - {item.completed ? "COMPLETED" : "TO DO"}</h2>
                    <button onClick={() => completeItem(index)}>toggle completion</button>
                    <button onClick={() => deleteItem(index)}>delete</button>
                </div>
            })}
            <form onSubmit={addItem}>
                <input
                    type="text"
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                />
                <button type="submit">Add New Item</button>
            </form>
        </>
    );
}

