import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AppState } from "./modules/Redux/reducers/rootReducer";
import {
    fetchListRequest,
    toggleCompletionRequest,
    deleteItemRequest,
    addItemRequest,
    setListProperties,
    resetListProperties,
} from "./modules/Redux/actions/lists/actions";
import { ListItem } from "./modules/Redux/actions/lists/types";

import "./App.css";

export const App = () => {
    const reduxDispatch = useDispatch();
    const list = useSelector(
        (state: AppState) => state.lists.list,
    );
    const listName = useSelector(
        (state: AppState) => state.lists.listName,
    );
    
    const [newItem, setNewItem] = useState<string>("");
    const [newListName, setNewListName] = useState<string>("");

    useEffect(() => {
        reduxDispatch(fetchListRequest());
    }, [reduxDispatch]);

    const completeItem = (index: number): void => {
        const itemId: number = list[index].id;
        reduxDispatch(toggleCompletionRequest({ id: itemId }));
    };

    const deleteItem = (index: number): void => {
        const itemId: number = list[index].id;
        reduxDispatch(deleteItemRequest(itemId));
    };

    const addItem = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        reduxDispatch(addItemRequest(newItem));
        setNewItem("");
    };

    const nameOrResetList = (event: React.SyntheticEvent): void => {
        event.preventDefault();
        if (listName) {
            reduxDispatch(resetListProperties(["listName"]));
            setNewListName("");
        } else {
            reduxDispatch(setListProperties({ listName: newListName }));
        };
    };

    const listNameOnChange = (event: React.SyntheticEvent): void => {
        if (!listName) {
            setNewListName(event.target.value);
        }
    };
     
    return (
        <>
            <h1>redux-saga</h1>
            <form onSubmit={nameOrResetList}>
                <input
                    type="text"
                    value={newListName}
                    onChange={listNameOnChange}
                />
                <button type="submit">{listName ? "Reset Name" : "Name List"}</button>
            </form>
            <h1>List Name: {listName}</h1>
            {list.map((item: ListItem, index: number) => {
                return <div key={index}>
                    <h2>{item.value} - {item.completed ? "COMPLETED" : "TO DO"}</h2>
                    <button onClick={() => completeItem(index)}>toggle completion</button>
                    <button onClick={() => deleteItem(index)}>delete</button>
                </div>
            })}
            <form onSubmit={addItem}>
                <input
                    type="text"
                    value={newItem}
                    onChange={event => setNewItem(event.target.value)}
                />
                <button type="submit">Add New Item</button>
            </form>
        </>
    );
}

