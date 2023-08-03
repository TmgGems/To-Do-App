import axios from "axios";
import { useState,useEffect } from "react";

const useFetch = (url) =>{
    const [data,setData] = useState([]);
    const [loading,setloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setloading(true);
        const fetchData = async ()=>{
            try{
                const{data} = await axios(url);
                if(data){
                    setloading(false);
                    setData(data.data);
                }
            }catch(error){
                setloading(false);
                setError(error);
            }
        };
        fetchData();
    }, [url]);  
    
    return {data,loading,error};
};

export default useFetch;