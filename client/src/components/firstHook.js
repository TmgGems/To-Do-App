import React,{ useState} from "react";

function FavoriteColor(){
    const [color,setColor] = useState("blue");

    return(
        <>
        <h1>My favorite color is {color}!</h1>
        <button type="button" onClick={()=>setColor("red")}>
            Red
        </button>
        
        <button type="button" onClick={()=>setColor("blue")}>
            Blue
        </button>
        </>
    );
}

export default FavoriteColor;