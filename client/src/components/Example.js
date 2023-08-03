//rfce
import {useState,useEffect} from "react";
//Adding events to component
 function Example(){
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
        setTimeout(()=>{
            setCount((count)=>count+1);
        },[]);
    })

    return <h1>I have rendered{count}times!</h1>
}

export default Timer;

//export default Example;