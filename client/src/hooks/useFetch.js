import axios from "axios";
import { useState,useEffect } from "react";

const useFetch = (url) =>{
    const [data,setData] = useState([]);
    const [loading,setloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        let isMounted = true;
        setloading(true);
        const fetchData = async ()=>{
            try{
                const{data} = await axios(url);
                if(isMounted && data){
                    setloading(false);
                    setData(data.data);
                }
            }catch(error){
                setloading(false);
                setError(error);
            }
        };
        fetchData();
        return () =>{
            isMounted = false;
        };
    }, [url]);  
    
    return {data,loading,error};
};

export default useFetch;