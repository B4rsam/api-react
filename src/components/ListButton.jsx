import { useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';

const ListButton = ({ children }) => {
    const [state, setState] = useState([]);
    const handleFetchDataList = () => {
        fetchList().then((data) => {
            setState(data)
        })
    }

    return (
        <>
        <button className="btn listbtn" onClick={handleFetchDataList}>See List</button>
        {children(state)}
        </>
        
    )
}

function fetchList() {
    return axios("https://jsonplaceholder.typicode.com/posts");
}

export default ListButton;
