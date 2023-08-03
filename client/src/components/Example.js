//rfce
import {useState,useEffect} from "react";
import axios from "axios";
//Adding events to component
/*function Example(){
    const shoot =(a)=>{
        alert(a);
    };
    return (
    <>
    <button onClick={()=>shoot("Goal!")}>Take the Shot!</button>
    </>
    );
}


function Timer(){
    const [count,setCount]=useState(0);

    useEffect (()=>{
        let timer = setTimeout(()=>{
            setCount((count)=>count+1);
        },1000);
        return ()=>clearTimeout(timer);
    },[])

    return <h1>I have rendered {count} times!</h1>
}

export default Timer;

//export default Example;


*/

function Example(){
    const[data,setData]=useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            const{data} = await axios("http://localhost:8002/api/v1/todos");
            setData(data.data);
        };
        fetchData();
    },[]);
    return (
        <>
        {data && data.length >0 &&(
            <>
            <ul>
                {data.map((todo,index)=>(
                    <li key={index}>{todo?.title}</li>
                ))}
            </ul>
            </>
        )}
        </>
    )
}

export default Example;