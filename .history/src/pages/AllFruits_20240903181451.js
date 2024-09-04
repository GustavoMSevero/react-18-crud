import axios from "axios";
import { useEffect, useState } from "react";

function AllFruits() {
    const [allFruits, setAllFruits] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/fruit").then((response) => {
            setAllFruits((previousState) => {
                return response.data;
            });
        })
    },[]);

    
    return <></>;
}

export default AllFruits;