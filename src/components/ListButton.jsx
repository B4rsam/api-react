import { useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';

const ListButton = ({ children }) => {
    const [state, setState] = useState([]);
    const handleFetchDataList = () => {
        fetchList().then((data) => {
            setState(data.data);
        });
    }
    const handleDeleteItem = (id) => {
        deleteItem(id).then(() => {
            const filteredItem = state.filter((item) => item.id !== id)
            setState(filteredItem)
        })
    }

    return (
        <>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleFetchDataList}>See List</button>
        {children(state, handleDeleteItem)}
        </>
    )
}

function fetchList() {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
}

function deleteItem(id) {
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

export default ListButton;
